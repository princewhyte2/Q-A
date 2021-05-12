export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda-whyte-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda-whyte-staging.azurewebsites.net'
    : 'https://localhost:5001';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-dinw8p9f.us.auth0.com',
  client_id: 'hzrT91ztHxTMKQG9n5lfX1SYwWzxYT8N',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
