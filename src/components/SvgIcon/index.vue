<template>
	<!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
	<svg :style="{ width, height }">
		<!-- xlink:href 执行用哪一个图标，属性值务必#icon-图标名字 -->
		<!-- use标签fill属性设置图标的颜色 -->
		<use :xlink:href="prefix + name" :fill="color"></use>
	</svg>
</template>

<script setup lang="ts">
type Props = {
	//xlink:href 属性值前缀
	prefix?: string;
	// 图标名字
	name: string;
	// 颜色
	color?: string;
	// 宽度
	width?: string;
	// 高度
	height?: string;
};

// 默认值
withDefaults(defineProps<Props>(), {
	prefix: '#icon-',
	color: '#000',
	width: '16px',
	height: '16px'
});
</script>

<style lang="scss" scoped></style>
