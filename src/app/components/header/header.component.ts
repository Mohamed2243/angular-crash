import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showAddTask: boolean = true;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) =>
      (this.showAddTask = value));
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  addTask() {
    this.uiService.toggleAddTask();
    this.showAddTask = !this.showAddTask;
  }
}

