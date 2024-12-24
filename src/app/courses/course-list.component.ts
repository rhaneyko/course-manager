import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from './course';
import { StarComponent } from '../assets/star/star.component';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, StarComponent],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  course: Course[] = [];

  ngOnInit() {
    this.course = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: 'assets/images/forms.png',
        price: 99.99,
        code: 'ANG-101',
        duration: 120,
        rating: 4.5,
        releaseDate: 'March 19, 2021',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: 'assets/images/http.png',
        price: 45.99,
        code: 'XPS-1090',
        duration: 120,
        rating: 4.3,
        releaseDate: 'March 19, 2021',
      },
    ];
  }
}
