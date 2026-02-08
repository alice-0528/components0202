import { Component } from '@angular/core';

@Component({
  selector: 'app-arr-demo',
  imports: [],
  templateUrl: './arr-demo.component.html',
  styleUrl: './arr-demo.component.scss'
})
export class ArrDemoComponent {




//  practice = [10,20,3,5,8,9,23,657,123,67];

//  arrayData3 = [
//   { id:1,
//     name:'a',
//     userData:[
//       { userId: '1'}
//     ]
//   },
//   { id: 2,
//     name:'b',
//     userData:[
//       { userId:'2'}
//     ]
//   },
//   { id: 3,
//     name:'c',
//     userData:[
//       { userId:'3'}
//     ]
//   },
//  ]

//  userArray = [
//   {
//     userName: '玩家A',
//     lev: 10,
//     props: [
//       {
//         propName: '蘑菇',
//         amount: 5
//       },
//       {
//         propName: '金幣',
//         amount: 15
//       }
//     ]
//   },
//   {
//     userName: '玩家B',
//     lev: 15,
//     props: [
//       {
//         propName: '龜殼',
//         amount: 1
//       },
//       {
//         propName: '砲彈',
//         amount: 15
//       }
//     ]
//   }
//  ]



  // ngOnInit(): void {
  //   // let arrayData = [2,3,5];
  //   // for(let i=0;i<arrayData.length;i++){
  //   //   console.log(arrayData[i]);
  //   // }

  //   // console.log('arrayData:' +arrayData[2]);

  //   // let arrayData = [2,3,5];
  //   // for (let data of arrayData)
  //   //   console.log(data);


  //   // for (let practiceData of this.practice)
  //   //   console.log('practiceData:' +this.practice[5]);

  //   // for (let data3 of this.arrayData3){
  //   //   for (let user of data3.userData){
  //   //     console.log(user.userId)
  //   //   }
  //   // }

  // }

  testNum!:any;
  role='管理員';

  ngOnInit(): void {
    if (this.testNum == 1){
    console.log(1);
  } else if (this.testNum === 2){
    console.log(2);
  } else {
    console.log('other');
  }


  switch(this.testNum){
    case 'admin':
      console.log("管理員");
      break;
    case 'use':
      console.log("使用者");
      break;
    default:
      console.log('NPC');
      break;
  }


  }



}
