import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule,SkeletonComponent],
  standalone: true,
})
export class CardComponent   {
  @Input() publicRepos:any;
  @Input() loading:any;

  
}
