import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports:[ReactiveFormsModule,CommonModule],
  standalone:true
})
export class SearchComponent {
  @Input()hasError:any;
  username = new FormControl('', {
    validators: [Validators.required],
  });
  form = new FormGroup({
    username: this.username,
  });

  @Output() sendEvent = new EventEmitter<string>()

  onSearch(){
    this.sendEvent.emit(this.form.value.username!)
  }
}
