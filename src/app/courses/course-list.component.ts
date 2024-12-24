import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from './course';

@Component({
  selector: 'app-course-list',
  imports: [ CommonModule],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  course: Course[] = [];

  ngOnInit() {
    this.course = [
      {
        id: 1,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 99.99,
        code: 'ANG-101',
        duration: 120,
        rating: 4.5,
        releaseDate: 'March 19, 2021',
      },
      {
        id: 2,
        name: 'Angular: Getting Started',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-1090',
        duration: 120,
        rating: 4.5,
        releaseDate: 'March 19, 2021',
      },
    ];
  }
}
