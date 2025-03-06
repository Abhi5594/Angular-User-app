import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  template: `<app-parent></app-parent>`, 
})
export class AppComponent {}
