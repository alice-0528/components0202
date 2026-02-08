import { Component } from '@angular/core';
import { HttpClientService } from '../../@service/http-client.service';

@Component({
  selector: 'app-api-demo',
  imports: [],
  templateUrl: './api-demo.component.html',
  styleUrl: './api-demo.component.scss'
})
export class ApiDemoComponent {
  constructor(private http: HttpClientService){}



  ngOnInit(): void {
  //   console.log('開始呼叫api');
  //   this.http
  //   .getApi('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
  //   .subscribe((res: any)=>{
  //     console.log('api回來了')
  //   });
  //   console.log('程式繼續跑')
  //   //開始呼叫api => 程式繼續跑 => api回來了


  //   //呼叫post api之前先把要傳遞的資料打包
  //   let postData = {
  //     userName: 'Allen',
  //     userAge: 18
  //   }

  //   //呼叫post的方法
  //   this.http
  //   .postApi('https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post', postData)
  //   .subscribe((res: any) =>{
  //     console.log(res);
  //   })




  }


}
