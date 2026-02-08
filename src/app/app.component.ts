import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// lev:number=1;//等級
// attack:number=10;//攻擊力
// attend:number=10;//防禦力

// changeLev!:number|null;//修改等級

// //升等
// up(){
//   this.lev+=1;
//   this.attack*=3;
//   this.attend*=2;
// };

// //重置
// reset(){
//   this.lev=1;
//   this.attack=10;
//   this.attend=10;
//   this.changeLev=null;
// }

// //修改等級
// revise(){
//   if(this.changeLev==null || this.changeLev<1){//防呆
//     return;
//   }
//   this.lev=1;
//   this.attack=10;
//   this.attend=10;
//   for(let i=1;i<this.changeLev;i++){
//     this.up();
//   }
// }


// //降級
// drop(){
//   if(this.lev>1){//防呆
//   this.lev-=1;
//   this.attack/=3;
//   this.attend/=2;
//   }
// }

}
