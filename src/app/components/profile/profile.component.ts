import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProfileSkeletonComponent } from '../profile-skeleton/profile-skeleton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [ProfileSkeletonComponent, CommonModule],
  standalone: true,
})
export class ProfileComponent {
  @Input()loading:any;
  @Input() userInfo: any;
}
