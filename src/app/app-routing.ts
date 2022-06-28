import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";

const routes: Routes = [
    {
        path: 'userModule',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
]
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})    
export class AppRoutingModule{

}