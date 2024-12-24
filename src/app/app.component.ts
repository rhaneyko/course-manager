import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';



@Component({
  selector: 'app-root',
  imports: [FormsModule, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'course-manager';
  name = 'John Doe';
}
