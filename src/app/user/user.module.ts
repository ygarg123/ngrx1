import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserComponent } from './user.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { fromUser } from '../user1/user.index';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from "./user-routing";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    EffectsModule.forFeature([fromUser.UserEffects]),
  ],
  providers: [HttpClient],
})
export class UserModule { 
  
  // const routes: Routes = [
  //   {
  //     path: UserComponent,
  //     loadChildren: () => import('../user/user.component').then(m => m.UserComponent)
  //   }
  // ];
}
