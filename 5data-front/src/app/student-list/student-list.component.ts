import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as CanvasJS from "../../assets/canvasjs.min.js";
import { chart } from "highcharts";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["../../materialize.css"],
})
export class StudentListComponent implements OnInit {
  private students: any;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get("http://localhost:3000/etudiants/get/")
      .subscribe((students) => {
        this.students = students;
      });
  }

  allStudent(event: Event) {
    this._http
      .get("http://localhost:3000/etudiants/get/")
      .subscribe((students) => {
        this.students = students;
        let dataCanvas = [];
        this.students.map((data) => {
          dataCanvas.push({ y: data.General_Mean});
        });
        let chart = new CanvasJS.Chart("chartContainer", {
          zoomEnabled: true,
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Performance Results Students"
          },
          subtitles:[{
            text: "Supinfo"
          }],
          data: [
          {
            type: "line",                
            dataPoints: dataCanvas
          }]
        });
        chart.render()
      });
      
  }
  successfulStudent(event: Event) {
    this._http
      .get("http://localhost:3000/etudiants/success/")
      .subscribe((students) => {
        this.students = students;
        let dataCanvas = [];
        this.students.map((data) => {
          if (dataCanvas.length > 0) {
            const indexOf = dataCanvas
              .map((att) => {
                return att.label;
              })
              .indexOf(data.Campus);
            if (indexOf !== -1) {
              let newMean = {
                y: (dataCanvas[indexOf].y + data.General_Mean) / 2,
                label: data.Campus,
              };
              dataCanvas.splice(indexOf, 1, newMean);
              return dataCanvas
            }
          }
          dataCanvas.push({ y: data.General_Mean, label: data.Campus });
        });
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Success Mean of Each Campus",
          },
          data: [
            {
              type: "column",
              dataPoints: dataCanvas,
            },
          ],
        });

        chart.render();
      });
  }
  getStoppedStudent(event: Event) {
    this._http
      .get("http://localhost:3000/etudiants/stopped/")
      .subscribe((students) => {
        this.students = students;
        let dataCanvas = [];
        this.students.map((data) => {
          if (dataCanvas.length > 0) {
            const indexOf = dataCanvas
              .map((att) => {
                return att.label;
              })
              .indexOf(data.Campus);
            if (indexOf !== -1) {
              let newMean = {
                y: (dataCanvas[indexOf].y + data.General_Mean) / 2,
                label: data.Campus,
              };
              dataCanvas.splice(indexOf, 1, newMean);
              return dataCanvas
            }
          }
          dataCanvas.push({ y: data.General_Mean, label: data.Campus });
        });
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Student who failed",
          },
          data: [
            {
              type: "pie",
              dataPoints: dataCanvas,
            },
          ],
        });

        chart.render();
      });
  }

  getStudentByRegion(event: Event) {
    this._http
      .get("http://localhost:3000/etudiants/region/")
      .subscribe((students) => {
        this.students = students;
        let dataCanvas = [];
        this.students.map((data) => {
          if (dataCanvas.length > 0) {
            const indexOf = dataCanvas
              .map((att) => {
                return att.label;
              })
              .indexOf(data.Campus);
            if (indexOf !== -1) {
              let nbStudent = {
                y: (dataCanvas[indexOf].y + 1),
                label: data.Campus,
              };
              dataCanvas.splice(indexOf, 1, nbStudent);
              return dataCanvas
            }
          }
          dataCanvas.push({ y: 1, label: data.Campus });
        });
        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Student by region",
          },
          data: [
            {
              type: "pie",
              dataPoints: dataCanvas,
            },
          ],
        });

        chart.render();
      });
    }
}
