import { ChildComponent } from './@component/child/child.component';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildAComponent } from './@component/child-a/child-a.component';
import { FatherComponent } from './@component/father/father.component';
import { ArrDemoComponent } from './@component/arr-demo/arr-demo.component';
import { ApiDemoComponent } from './@component/api-demo/api-demo.component';
import { FirstComponent } from './@component/first/first.component';
import { SecondComponent } from './@component/second/second.component';
import { WeatherDemoComponent } from './@component/weather-demo/weather-demo.component';

export const routes: Routes = [
  {path:'first',component:FirstComponent,
  children:[{path:'child-a',component:ChildAComponent}]},

  {path:'second',component:SecondComponent,
  children:[{path:'second-1',component:SecondComponent}]},
  {path:'second/:name',component:SecondComponent},

  {path:'father',component:FatherComponent},
  {path:'child',component:ChildComponent},
  {path:'arrDemo',component:ArrDemoComponent},
  {path:'apiDemo',component:ApiDemoComponent},
  {path:'weather',component:WeatherDemoComponent},



  {path:'abc',redirectTo:'/first',pathMatch:'prefix'},
  {path:'**',component:AppComponent}//路徑不存在時導向的位置(這裡是首頁)，記得放在最下面
];
