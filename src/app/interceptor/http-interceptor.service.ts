import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let curHeaders = request.headers;
		curHeaders = curHeaders.append('Access-Control-Allow-Origin', '*');
		curHeaders = curHeaders.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
		curHeaders = curHeaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');



		request = request.clone({
			headers: curHeaders
		});

		return next.handle(request)
			.pipe(
				tap(event => {
					if (event instanceof HttpResponse) {
						console.log(event.status);
					}
					else
					console.log(event)
				}, error => {
					// http response status code
					console.log("----response error----");
					console.error(JSON.stringify(error));
					console.log("--- end of response---");
				})
			)
	};
}