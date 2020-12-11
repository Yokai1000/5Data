import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HighchartsService } from "../service/highcharts.service";

@Component({
  selector: "app-time-evolution",
  templateUrl: "./time-evolution.component.html",
  styleUrls: ["./time-evolution.component.scss"]
})
export class TimeEvolutionComponent implements OnInit {
  private countByYear: any;

  private options = {
    chart: {
      type: "line"
    },
    title: {
      text: "hired student by year"
    },
    yAxis: {
      title: {
        text: "hired student"
      }
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },
    series: []
  };

  constructor(
    private highcharts: HighchartsService,
    private _http: HttpClient
  ) {}

  @ViewChild("charts1", { static: true }) public chartEl1: ElementRef;
  @ViewChild("charts2", { static: true }) public chartEl2: ElementRef;

  ngOnInit() {
    // CHART 1 : STUDENT EVOLUTION BY GENDER AND BY YEAR
    this._http
      .get("http://localhost:3000/etudiants/countByYear/Gender")
      .subscribe(countByYear => {
        const serieM = {
          name: "male students",
          data: []
        };
        const serieF = {
          name: "female students",
          data: []
        };
        const serieT = {
          name: "total students",
          data: []
        };
        const opt = JSON.parse(JSON.stringify(this.options));
        opt.title.text = "hired student by year and by gender";
        this.countByYear = countByYear;

        for (const data of this.countByYear) {
          if (data._id.gender == "Male") {
            serieM.data.push(data.count);
          } else if (data._id.gender == "Female") {
            serieF.data.push(data.count);
          }
        }
        opt.plotOptions.series.pointStart = this.countByYear[0]._id.year;

        serieT.data = serieM.data.map(function(count, id) {
          return count + serieF.data[id];
        });

        opt.series.push(serieM);
        opt.series.push(serieF);
        opt.series.push(serieT);

        this.highcharts.createChart(this.chartEl1.nativeElement, opt);
      });

    // CHART 2 : STUDENT EVOLUTION BY DOMAIN AND BY YEAR
    this._http
      .get("http://localhost:3000/etudiants/countByYear/Domain")
      .subscribe(countByYear => {
        const serieB = {
          name: "Business students",
          data: []
        };
        const serieC = {
          name: "Communication students",
          data: []
        };
        const serieD = {
          name: "Design students",
          data: []
        };
        const serieI = {
          name: "IT students",
          data: []
        };

        const opt = JSON.parse(JSON.stringify(this.options));
        opt.title.text = "hired student by year and by domain";
        opt.chart.type = "area";
        opt.plotOptions.area = {};
        opt.plotOptions.area.stacking = "normal";
        this.countByYear = countByYear;

        for (const data of this.countByYear) {
          if (data._id.domain == "Business") {
            serieB.data.push(data.count);
          } else if (data._id.domain == "Communication") {
            serieC.data.push(data.count);
          } else if (data._id.domain == "Design") {
            serieD.data.push(data.count);
          } else if (data._id.domain == "IT") {
            serieI.data.push(data.count);
          }
        }
        opt.plotOptions.series.pointStart = this.countByYear[0]._id.year;

        opt.series.push(serieB);
        opt.series.push(serieC);
        opt.series.push(serieD);
        opt.series.push(serieI);

        this.highcharts.createChart(this.chartEl2.nativeElement, opt);
      });
  }
}
