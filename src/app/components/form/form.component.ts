import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class FormComponent {
  constructor(public apiService: ApiService, private router: Router) {
    apiService;
  }
  hasError = false;
  username = new FormControl('', {
    validators: [Validators.required],
  });
  form = new FormGroup({
    username: this.username,
  });

  onSearch() {

    this.apiService.getUser(this.form.value.username!).subscribe(
      (data) => {
        this.router.navigate(['/search', this.form.value.username], {
          queryParams: { page: 1, per_page: 10 },
        });
      },
      (error) => {
        this.hasError = true;
      }
    );
  }
}
