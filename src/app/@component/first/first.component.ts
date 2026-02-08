import { ExampleService } from './../../@service/example.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
//   constructor(
//     private router:Router,
//     private activatedRoute:ActivatedRoute
//   ){}//依賴注入


// goToSecond(){

//   // //方法一
//   // this.router.navigate(['/second']);//ts寫法

//   //方法二
//   this.router.navigateByUrl('/second')


// };

// Home(){
//   this.router.navigateByUrl('/Appcomponent')
// };

// goFirst(){
//   this.router.navigateByUrl('/first')
// };

// goSecond(){
//   this.router.navigateByUrl('/second')
// };




// ngOnInit(): void {
//   console.log(this.activatedRoute.snapshot.queryParamMap.get('name'))
// }





//資料傳遞
constructor(
  private router:Router,
  private exampleService:ExampleService){}

// globalData:string="first"

// goToSecond(){
//   this.exampleService.globalData = this.globalData;
//   this.router.navigateByUrl('/second');
// }


account!:string //帳號
password!:string //密碼

sendData(){
  this.exampleService.globalData={
    account:this.account,
    password:this.password
  };
  this.router.navigateByUrl('/second');
}

}

