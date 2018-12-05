import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddclassComponent } from './addclass/addclass.component';
import { NbThemeModule, NbCardModule, NbMenuModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StudentComponent,
    ClassComponent,
    AddstudentComponent,
    AddclassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
