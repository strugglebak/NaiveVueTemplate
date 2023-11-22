import request from '@/utils/request';

import type { LoginFormData, LoginResponseData } from './type';

enum API {
	LOGIN_URL = '/admin/acl/index/login'
}

// 登录接口
export const reqLogin = (data: LoginFormData) =>
	request.post<any, LoginResponseData>(API.LOGIN_URL, data);
