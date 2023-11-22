import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // 引入path模块

/** 自动导入插件 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/** 引入svg插件 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[dir]-[name]'
		})
	],
	// 配置src目录别名
	resolve: {
		alias: {
			'@': path.resolve('./src') // 相对路径别名配置，使用 @ 代替 src
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				javascriptEnabled: true,
				additionalData: '@import "./src/styles/variable.scss";'
			}
		}
	}
});
