<script lang="ts" setup>
import { ref } from 'vue';
import { NButton, NForm, NFormItem, NInput, NLayout, NLayoutContent } from 'naive-ui';
import webClient from '@/utils/request';

const captcha = ref('');
const countdown = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

const getCaptcha = async () => {
	try {
		const response = await webClient.get('/api/get-captcha');
		countdown.value = response.data.timer; // 假设API返回的是一个倒计时时间
		timer = setInterval(() => {
			if (countdown.value > 0) {
				countdown.value--;
			} else {
				if (timer) {
					clearInterval(timer);
				}
			}
		}, 1000);
	} catch (error) {
		console.error('Error getting captcha:', error);
	}
};

const handleSubmit = async (e: Event) => {
	e.preventDefault();
	try {
		const response = await webClient.post('/api/login', { captcha: captcha.value });
		console.log('Login successful:', response);
	} catch (error) {
		console.error('Login error:', error);
	}
};
</script>

<template>
	<NLayout class="layout">
		<NLayoutContent class="content">
			<div class="login-container">
				<NForm @submit.prevent="handleSubmit">
					<NFormItem label="验证码">
						<n-input v-model:value="captcha" placeholder="请输入验证码" />
					</NFormItem>
					<NButton @click="getCaptcha" :disabled="countdown > 0">
						{{ countdown > 0 ? `${countdown}秒后重新获取` : '获取验证码' }}
					</NButton>
					<NButton type="primary" native-type="submit" long>登录</NButton>
				</NForm>
			</div>
		</NLayoutContent>
	</NLayout>
</template>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.content {
	display: flex;
	justify-content: center;
}

.login-container {
	width: 300px;
}
</style>
