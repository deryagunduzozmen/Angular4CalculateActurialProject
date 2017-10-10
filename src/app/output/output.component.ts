import { Component, OnInit, Input } from '@angular/core';
import { outputResult } from "app/outputResult.model";
import { CalculateActurialService } from "app/calculateActurial.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  debugger;
@Input() results:outputResult[];
  constructor() { }

  ngOnInit() {
 
  }

}
