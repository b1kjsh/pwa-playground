import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UploadService } from './upload/upload.service';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { DropZoneDirective } from './upload/drop-zone.directive';
import { AngularFireDatabaseModule } from 'angularfire2/database';




@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    AboutComponent,
    HomeComponent,
    DropZoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp({
      apiKey: '',
      databaseURL: 'fileuploadpwa.firebaseio.com',
      authDomain: 'fileuploadpwa.firebaseio.com',
      storageBucket: 'fileuploadpwa.appspot.com',
      projectId: 'fileuploadpwa',
    }),
    AngularFireDatabaseModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
