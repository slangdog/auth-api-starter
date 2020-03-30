export const AuthHeader = (context, contentType = "application/json; charset=utf-8") => {
  if (context.token !== undefined) {
    return { "Authorization": `Bearer ${context.token}`, "Content-Type": contentType };
  } else {
    return { "Content-Type": contentType };
  }
}