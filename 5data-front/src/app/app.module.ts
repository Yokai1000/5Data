import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

// MATERIAL DESIGN MODULES
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
} from "@angular/material";

import { ChartModule } from "angular-highcharts";

import { APP_ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { TimeEvolutionComponent } from "./time-evolution";
import { CampusComponent } from "./campus";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudentListComponent } from "./student-list/student-list.component";

import { HighchartsService } from "./service/highcharts.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeEvolutionComponent,
    CampusComponent,
    StudentListComponent
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
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
