import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationService } from './application.service';
import { DbconfigComponent } from './dbconfig/dbconfig.component';

// NEW ADDED SEP-8TH
import { RouterModule, Routes } from '@angular/router';
import { JobconfigComponent } from './jobconfig/jobconfig.component';

// NEW ADDED SEP-8TH
const appRoutes: Routes = [
  { path: 'app-dbconfig', component: DbconfigComponent },
  { path: 'app-jobconfig', component: JobconfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DbconfigComponent,
    JobconfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
