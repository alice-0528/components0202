import { Component } from '@angular/core';
import { Person } from '../../@interface/person';

// interface Person {
//   id:number,
//   name:string,
//   age:number,
//   note?:string//?表示note屬性可有可無
// }

interface testInterface {
  name: string;
  getName(): string;
}



interface userData {
  userName: string,
  lev: number,
  props: Array <propsData>//Array:陣列 <>
}

interface propsData {
  propsName: string,
  amount: number
}



@Component({
  selector: 'app-interface',
  imports: [],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent implements testInterface {
  name: string='p';
  getName(): string {
    return this.name
  };

  person!:testInterface;



  userArray: userData = {
    userName: '玩家A',
    lev: 18,
    props: [
      {
        propsName: '蘑菇',
        amount: 5,
      },
      {
        propsName: '金幣',
        amount: 15,
      }
    ]
  };


  ngOnInit(): void {
    // let user: any; //情境一
    // let user: Person; //情境二

    // user={
    //   id: 1,
    //   name: 'aaa',
    //   age: 20
    // }
    // // console.log(user.namm);    //情境一：undefined　情境二：直接報錯
    // // console.log(user.age.toUpperCase());   //情境一：執行時會報錯　情境二：直接報錯

  let p: testInterface = {
      name: 'aaa',
      getName(): string {
        return this.name
      },
    }
    console.log(p?.getName()); //aaa

  }

}
