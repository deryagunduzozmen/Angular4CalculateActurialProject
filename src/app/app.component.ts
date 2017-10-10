import { Component, Input, OnInit } from '@angular/core';
import { CalculateActurialService } from "app/calculateActurial.service";
import { outputResult } from "app/outputResult.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CalculateActurialService]
})
export class AppComponent implements OnInit {
  isShowOutput=false;
  parentResults:outputResult[];
  constructor(private service:CalculateActurialService){}
 ngOnInit() {
  this.service.SendResult
       .subscribe(
    (resultList:outputResult[])=> {
      this.parentResults=resultList;
      this.isShowOutput=true;
    }
  );
  }
}
