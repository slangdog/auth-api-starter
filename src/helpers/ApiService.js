import { AuthHeader } from './AuthHeader';
import { ApiResponse } from './ApiResponse';

export const ApiService = {
  get, post, patch, del
};

function apiCall(method, endpoint, context, body = {}, header = '') {
  const requestOptions = {
    method: method,
    headers: header === '' ? AuthHeader(context.auth) : AuthHeader(context.auth, header),
    dataType: 'json',
  };
  if (method === 'POST' || method === 'PATCH') {
    requestOptions.body = JSON.stringify(body);
  }
  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, requestOptions).then((res) => ApiResponse(res, context));
}

function get(endpoint, context) {
  return apiCall('GET', endpoint, context);
}

function post(endpoint, context, body) {
  return apiCall('POST', endpoint, context, body)
}

function patch(endpoint, context, body) {
  return apiCall('PATCH', endpoint, context, body, "application/merge-patch+json")
}

function del(endpoint, context) {
  return apiCall('DELETE', endpoint, context);
}