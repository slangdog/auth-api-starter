import { AuthHeader } from './AuthHeader';
import { ApiResponse } from './ApiResponse';

export const ApiService = {
  get, post, patch, del
};

function get(endpoint, context) {
  const requestOptions = {
    method: 'GET',
    headers: AuthHeader(context.auth),
    dataType: 'json',
  };
  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, requestOptions).then((res) => ApiResponse(res, context));
}

function post(endpoint, context, body) {
  const requestOptions = {
    method: 'POST',
    headers: AuthHeader(context.auth),
    dataType: 'json',
    body: JSON.stringify(body)
  };
  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, requestOptions).then((res) => ApiResponse(res, context));
}

function patch(endpoint, context, body) {
  const requestOptions = {
    method: 'PATCH',
    headers: AuthHeader("application/merge-patch+json"),
    dataType: 'json',
    body: JSON.stringify(body)
  };
  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, requestOptions).then((res) => ApiResponse(res, context));
}

function del(endpoint, context) {
  const requestOptions = {
    method: 'DELETE',
    headers: AuthHeader(context.auth),
    dataType: 'json',
  };
  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, requestOptions).then((res) => ApiResponse(res, context));
}