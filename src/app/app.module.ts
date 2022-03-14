//import { WeatherService } from './statistics/weather.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { MonthComponent } from './month/month.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { DownComponent } from './down/down.component';
import { CardComponent } from './card/card.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EarnComponent } from './earn/earn.component';
import { StatusComponent } from './status/status.component';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from  '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
// import { NgxMatCalendarModule } from 'ngx-mat-calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './card/auth.service';
import { HttpClientModule } from '@angular/common/http';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    MonthComponent,
    InvoicesComponent,
    DownComponent,
    CardComponent,
    AnalyticsComponent,
    StatisticsComponent,
    EarnComponent,
    StatusComponent,
    CalenderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    SidebarModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    //NgxMatCalendarModule,
    MatDatepickerModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService,
  ],
    // WeatherService
  bootstrap: [AppComponent]
})
export class AppModule { }
