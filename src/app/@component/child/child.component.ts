import { Component, Input, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // @Input() message!:string;

  // @Input() userName!:string;
  // @Input() userEmail!:string;
  // @Input() userAddress!:string;

  // notify=output<string>();//宣告一個output的事件
  // send(){
  //   this.notify.emit('hey bro.')//發送事件給父元件
  // }



  myName:string='';
  myEmail:string='';
  myAddress:string='';

  submitData=output<{
    name:string,
    email:string,
    address:string
  }>()

  send(){
    this.submitData.emit({
      name:this.myName,
      email:this.myEmail,
      address:this.myAddress
    })
  };

}
