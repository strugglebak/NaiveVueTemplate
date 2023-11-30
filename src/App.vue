<script setup lang="ts">
import { NMessageProvider, NConfigProvider, zhCN, NDialogProvider } from 'naive-ui';
</script>
<template>
	<NConfigProvider :locale="zhCN">
		<NDialogProvider>
			<NMessageProvider>
				<RouterView />
			</NMessageProvider>
		</NDialogProvider>
	</NConfigProvider>
</template>
<style lang="scss" scoped></style>
