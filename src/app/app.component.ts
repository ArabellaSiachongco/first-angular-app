import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId? : string;

  // to get a names that can be click and show the name, you need Getter, putting the ! at the end
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId) !;
  }

  onSelectUser(id:string) {
    // console.log("selected with user id " + id);
    this.selectedUserId = id;
  }
}

// to show all the components you need to import all of them in the app 
// calling the export name 