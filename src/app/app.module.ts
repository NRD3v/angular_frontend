import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './ngrx/effects';
import { reducers, metaReducers } from './ngrx/reducers';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormDoctorComponent } from './doctor/form/form-doctor/form-doctor.component';
import { LinkComponent } from './link/link.component';
import { ApiService } from './services/api.service';
import { ObjectLengthPipe } from './pipes/object-length.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        DoctorComponent,
        FormDoctorComponent,
        LinkComponent,
        ObjectLengthPipe
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot(effects),
        HttpClientModule,
        NgbModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
