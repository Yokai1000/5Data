import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as CanvasJS from "../../assets/canvasjs.min.js";

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
        console.log(students);
      });
  }
  successfulStudent(event: Event) {
    this._http
      .get("http://localhost:3000/etudiants/success/")
      .subscribe((students) => {
        this.students = students;
        console.log(students);
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
            text: "Basic Column Chart in Angular",
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
