import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from './store';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { metaReducers, reducers} from './store/reducers';
import {AppRoutingModule} from './app-routing'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot(
      reducers,{metaReducers}
    ),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
