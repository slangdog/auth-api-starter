export const ApiResponse = (response, context) => {
  const { logout } = context;
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        logout();
      }
      const error = response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
