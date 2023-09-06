export const BASE_URL = 'api/v1'
export const REGISTRATION_URL = '/registration'

export function fakeFetch(url: string, options: RequestInit = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { method } = options;
      const body = JSON.parse(options.body as string)


      switch (url) {
        case `${BASE_URL}${REGISTRATION_URL}`:
          if (method !== 'POST' || !body.email || !body.password) {
            reject(JSON.stringify({
              status: 400,
              error: 'Non method',
              statusText: 'error',
              headers: { 'Content-Type': 'application/json' },
            }));
            break
          }
          resolve(JSON.stringify({
            status: 200,
            statusText: 'OK',
            headers: { 'Content-Type': 'application/json' },
          }));
          break
        default:
          reject(JSON.stringify({
            status: 400,
            error: 'Server failed',
            statusText: 'error',
            headers: { 'Content-Type': 'application/json' },
          }));
          break;
      }
    }, 1000);
  });
}

// @ts-ignore
global.fetch = fakeFetch;