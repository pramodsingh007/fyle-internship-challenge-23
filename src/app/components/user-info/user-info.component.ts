import { Component, Input, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    ProfileComponent,
    CardComponent,
    PaginationComponent,
    CommonModule,
    SearchComponent,
  ],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  currentPage: any;
  perPage: any;
  publicRepos: any;
  loading: boolean = false;
  username:any;
  userInfo:any 
  hasError:boolean=false

  constructor(public route: ActivatedRoute, public apiService: ApiService,public router:Router) {
    route;
    router;
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'];
      this.perPage = params['per_page'];
      this.fetchRepos()
    });

    this.route.paramMap.subscribe((params:any)=>{
      this.username = params.params.username
      this.fetchRepos()
      this.fetchProfile()
    })
  }

  receiveEvent(username: string) {
    this.router.navigate(['/search', username], {
      queryParams: { page: 1, per_page: this.perPage },
    });
    // this.fetchRepos()
  }

  receivePageSize(pageSize:string){
    this.router.navigate(['/search', this.username], {
      queryParams: { page: 1, per_page: pageSize },
    });
    // this.fetchRepos()
  }

 

  fetchRepos(){
    const username = this.route.snapshot.paramMap.get('username')!;
      this.loading = true;
    this.apiService
        .getReposByPage(username, this.currentPage, this.perPage)
        .subscribe((data:any) => {
          this.hasError = false
          this.publicRepos = data;
          this.loading = false;
        },()=>{
          this.hasError = true
        });
  }


  fetchProfile(){
    this.loading = true
    this.apiService.getUser(this.username).subscribe((data:any)=>{
      this.hasError=false
      this.userInfo = data
      this.loading=false
    },()=>{
      this.hasError = true
    })
  }
}
