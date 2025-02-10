import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way to ${req.url}`);
  const authReq = req.clone({
    headers: req.headers.set('Owner', 'YB')
  });
  return next(authReq);
};
