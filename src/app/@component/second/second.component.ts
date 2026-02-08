import { ExampleService } from './../../@service/example.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  // constructor(
  //   private activatedRoute:ActivatedRoute
  // ){}


  // ngOnInit(): void {
  //   console.log(
  //     this.activatedRoute.snapshot.paramMap.get('name')
  //   );
  // }


  // 資料傳遞
  constructor(private ExampleService: ExampleService){}

//   ngOnInit(): void{
//     console.log(this.ExampleService.globalData);
//   }

getData!:string;

getFirstData!:{
  account:string,
  password:string
}

ngOnInit(): void {
  this.getFirstData=this.ExampleService.globalData;
}

}
