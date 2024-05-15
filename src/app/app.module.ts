import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ProfileSkeletonComponent } from './components/profile-skeleton/profile-skeleton.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
  
    UserInfoComponent,
       PaginationComponent,
       SkeletonComponent,
       ProfileSkeletonComponent,
       SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

