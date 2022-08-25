import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["APPLE", "GOOGLE", "COIN", "AMAZON", "CITI"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}

// export class EnergyGlobalDemandItem {
//   public constructor(init: Partial<EnergyGlobalDemandItem>) {
//       Object.assign(this, init);
//   }

//   public value: number | undefined;
//   public category: string | undefined;
//   public summary: string | undefined;

// }
// export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
//   public constructor() {
//       super();
//       this.push(new EnergyGlobalDemandItem(
//       {
//           value: 37,
//           category: `Cooling`,
//           summary: `Cooling 37%`
//       }));
//       this.push(new EnergyGlobalDemandItem(
//       {
//           value: 25,
//           category: `Residential`,
//           summary: `Residential 25%`
//       }));
//       this.push(new EnergyGlobalDemandItem(
//       {
//           value: 12,
//           category: `Heating`,
//           summary: `Heating 12%`
//       }));
//       this.push(new EnergyGlobalDemandItem(
//       {
//           value: 11,
//           category: `Lighting`,
//           summary: `Lighting 11%`
//       }));
//       this.push(new EnergyGlobalDemandItem(
//       {
//           value: 15,
//           category: `Other`,
//           summary: `Other 15%`
//       }));
//   }
// }

