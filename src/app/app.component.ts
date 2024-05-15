import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormComponent } from './components/form/form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[FormComponent,CommonModule,HttpClientModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true
})
export class AppComponent{
  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    
  }
  
}
