import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-father',
  imports: [ChildComponent,FormsModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
  // faterMessage:string='hello 我是父元件'


  // F_userName!:string
  // F_userEmail!:string
  // F_userAddress!:string


  // getChildData!:string;
  // fatherFun(msg:string){
  //   console.log(msg);
  // }



  formData={//父元件渲染的資料
    name:'',
    email:'',
    address:'',
  };

  //去取得子元件發送的資料
  getData(data:{name:string,email:string,address:string}){
    console.log(data);
    this.formData=data;
  }


}
