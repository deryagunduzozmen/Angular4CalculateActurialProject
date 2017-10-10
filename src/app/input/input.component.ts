import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from "events";
import { CalculateActurialService } from "app/calculateActurial.service";
import { outputResult } from "app/outputResult.model";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  selectedType="";
  mainLimit:any=1000000;
  mainRetention:any=2000000;
  AllValuesValid=false;
typeList:any=["Simple","Complex"]
  constructor(private calculateActurial:CalculateActurialService) { }
  ngOnInit() {
  }
  onTypeChange()
  {  
    if(this.selectedType!="" && this.mainLimit!="" && this.mainRetention!="")
      this.AllValuesValid=true;
  }
onCalculateClick()
{
this.calculateActurial.getResuls(this.mainLimit,this.mainRetention, this.selectedType);
}
}
