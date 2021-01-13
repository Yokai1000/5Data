import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { ChartModule } from "angular-highcharts";

import { APP_ROUTES } from "./app.routes";
import { AppComponent } from
 "./app.component";
import { HomeComponent } from "./home";
import { CampusComponent } from "./campus";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudentListComponent } from "./student-list/student-list.component";

import { HighchartsService } from "./service/highcharts.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampusComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
