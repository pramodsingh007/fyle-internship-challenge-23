import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  totalPages: any;
  @Input() currentPage:any;
  @Input() perPage:any;
  @Output() sendPageSize = new EventEmitter<string>()
  constructor(public apiService: ApiService, public route: ActivatedRoute, public router:Router) {
    apiService;
    route;
    router;
  }

  pageSize = new FormControl('10', {
    validators: [Validators.required],
  });
  form = new FormGroup({
    pageSize: this.pageSize,
  });

  selectHandler(){
    this.sendPageSize.emit(this.form.value.pageSize!)
  }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username')!;
    this.apiService.getRepos(username!).subscribe((data: any) => {
      this.totalPages = Math.round(data.length/this.perPage);
    });
  }

  get visiblePages(): number[] {
    const start = Math.max(1, this.currentPage - 4);
    const end = Math.min(this.totalPages, start + 9);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  gotoPage(page: number): any {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.router.navigate([],{queryParams:{page:this.currentPage,per_page:this.perPage}})
  
    }
  }

  prevPage(): any {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate([],{queryParams:{page:this.currentPage,per_page:this.perPage}})
      this.ngOnInit()
    }
  }

  nextPage(): any {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.router.navigate([],{queryParams:{page:this.currentPage,per_page:this.perPage}})
      this.ngOnInit()
      return this.currentPage;
    }
  }
}
