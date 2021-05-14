import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  configUrl = 'envapp/assets/app.config.json';
  apiGWUrl = 'https://2biz8ozb25.execute-api.ap-northeast-1.amazonaws.com/dev/pets';

  getConfig() {
    return this.http.get(this.configUrl);
  }
  
  getApiGWData() {
    return this.http.get(this.apiGWUrl);
  }
}
