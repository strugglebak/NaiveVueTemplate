export interface LoginFormData {
	username: string;
	password: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	phone: string;
	avatar: string;
	introduction: string;
	roles: string[];
	permissions: string[];
	createTime: string;
	updateTime: string;
	lastLoginTime: string;
	status: number;
}

export interface LoginResponseData {
	token: string;
	user: User;
}
