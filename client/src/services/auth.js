import request from '../utils/request';

export async function register(params) {
  return request('/auth/register', {
    method: 'POST',
    body: params,
  });
}

export async function accountLogin(params) {
  return request('/auth/login', {
    method: 'POST',
    body: params,
  });
}