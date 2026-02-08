import { Component } from '@angular/core';
import { HttpClientService } from '../../@service/http-client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-demo',
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './weather-demo.component.html',
  styleUrl: './weather-demo.component.scss'
})
export class WeatherDemoComponent {
    constructor(private http:HttpClientService){}

    DatasetDescription!:string;
    LocationsName!:string;
    time:number=0;//時間資料
    reviseTime!:number|null;//更改時間

    LocationData:any[] = [];//氣象所有資料
    chooseLocation:any = '';//選擇地區
    weather:any[] = [];//初始空陣列
    isOpen: boolean = false;//控制選單顯示

    // 切換選單顯示/隱藏
    toggleDropdown() {
    this.isOpen = !this.isOpen;
  }


    ngOnInit(): void {
      this.http
      .getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-84698769-2D40-46B5-BE00-9A4793B3782B&limit=3')
      .subscribe((res: any) =>{
        console.log(res);

        const data = res.records.Locations[0];//進入資料
        this.DatasetDescription = data.DatasetDescription;//標題
        this.LocationsName = data.LocationsName;//高雄市
        this.LocationData = data.Location;//地區所有資料

        if (this.LocationData.length > 0) {
          this.changeLocation(this.LocationData[0]);
        }
      });


    }

    changeLocation(LocationData:any){
      if (!LocationData) return;
      this.chooseLocation = LocationData.LocationName;
      //確保 WeatherElement 存在且有資料
      this.weather = LocationData.WeatherElement||[];
      console.log('當前天氣資料：',this.weather);
      this.isOpen = false; // 選完後自動關閉選單
      console.log('已切換至：', LocationData);

    }

    next(){
      if(this.time<24) {
        this.time+=1
      }
    }

    back(){
      if(this.time>0) {
        this.time-=1
      }
    }

    revise(){
      if(this.reviseTime == null || this.reviseTime <0) {
        return;
      }
      this.time = 0;
      for(let i=0; i<this.reviseTime;i++) {
        this.next();
      }
    }
}
