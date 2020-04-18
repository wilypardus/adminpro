import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

@Input() leyenda:string;
@Input() public doughnutChartLabels: Label[] = [];
@Input() public doughnutChartData: number[] = [];
@Input() public doughnutChartType: ChartType = 'doughnut';

  constructor() {
    console.log(this.doughnutChartLabels);
    console.log(this.doughnutChartData);
    console.log(this.doughnutChartType);

  }

  ngOnInit(): void {
  }
 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
}
