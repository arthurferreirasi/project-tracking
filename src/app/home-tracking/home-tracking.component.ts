import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home-tracking',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './home-tracking.component.html',
  styleUrl: './home-tracking.component.css'
})

export class HomeTrackingComponent {

  trackingCode: string = '';
  isInvalidCode!: boolean;

  ngOnInit() {
    this.isInvalidCode = true;
  }

  checkCode() {
    this.isInvalidCode = (typeof this.trackingCode.trim() == 'undefined' || this.trackingCode.trim() == null || this.trackingCode.trim() == '');
    return this.isInvalidCode;
  }

  public trackProject() {
    
  }

}
