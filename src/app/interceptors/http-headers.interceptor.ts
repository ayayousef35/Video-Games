import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // 'X-RapidAPI-Key': '56f1d8028cmshe4a812cb038b76dp1f159djsn6b0a4341a804',
        // 'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        // 'x-rapidapi-key': 'f50fab0387384c06b367829fdeb3995c',
        // 'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',

        'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: 'ff792fcdf6ab4ab88987fca2e22c8643',
      }
    });
    return next.handle(req);
  }
}