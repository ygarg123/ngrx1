import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { UserComponent } from "./user.component";


const routes: Routes = [
    {
        path: '',
        component : UserComponent
    }
]
@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})    
export class UserRoutingModule{

}