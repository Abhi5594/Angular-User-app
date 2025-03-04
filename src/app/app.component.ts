import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component'; // Ensure this path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent], // Include CommonModule
  template: `<app-parent></app-parent>`, 
})
export class AppComponent {}
