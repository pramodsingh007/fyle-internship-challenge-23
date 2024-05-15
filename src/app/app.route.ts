import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export const routes: Routes = [
    {path:'search/:username',component:UserInfoComponent},
    {path:'',component:FormComponent}
];
