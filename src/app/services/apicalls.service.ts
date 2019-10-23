import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class HttpService {
    headers = { headers: new HttpHeaders({ 'Accept': 'application/vnd.github.v3+json' }) };
    constructor(private http: HttpClient) { }
    getData(url) {
        return this.http.get(url, this.headers);
    }
}
