//? START of tutorial 1
// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// // global
// const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//  // signal are trackable data containers, objects the stores a value ad notify angular, then update the ui.
//   selectedUser = signal(DUMMY_USERS[randomUser]);

//  // using signal, every time you used signal put () in html cuz its string.
//   imagePath = computed(()=> 'assets/' + this.selectedUser().img)

// //  using getter, getter inside of  a method return the properties
//   get imagePath() {
//   return 'assets/' + this.selectedUser.img;
//  }

//  // onclick
//   onSelectedUser() {
//  //  console.log("clicked!");
//     const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomUser]);
//   }
// }

// Zone.js = notify angular about user events expired timers etc
// end of tutorial 1

//? START of tutorial 2
// Input with capital I = decorator @ | input lowercase is special function
// import { Component, computed, Input, input } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   // input decorator @, more reusable
//   // @Input({ required: true }) img!: string;
//   // @Input({ required: true }) name!: string;

//   //special function, read only signals
//   name = input.required<string>();
//   img = input.required<string>();

//   // get imagePath(){
//   //   return 'assets/' + this.img;
//   // }

//   // angular recomputed just the pic, a computed signal.
//   imagePath = computed(() => {
//     return 'assets/' + this.img();
//   });

//   onSelectedUser() {}
// }
// // end of tutorial 2

//? START of tutorial 3
// output lowercase is special function
import {
  Component,
  EventEmitter,
  Input,
  Output,
  output,
  input,
} from '@angular/core';

//importng a type
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// included in option 4: TYPE means typescript, User = first capital letter always,
// type User = {
//   id: string;
//   img: string;
//   name: string;
// };

// can be created as INTERFACE: MOVED them to a model.ts
// interface User {
//   id: string;
//   img: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // option 1
  // input decorator @, more reusable
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) img!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter ();

  // option 2
  // if its output and input lowercase = special function. the type of the output is string
  // id = input.required<string>();
  // img = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // for both option 1 and 2
  // get imagePath() {
  //   return 'assets/' + this.img;
  // }

  // onSelectedUser() {
  //   this.select.emit(this.id);
  // }

  //option 3
  // you can instead get all the user component by calling the whole doc
  // @Input({ required: true }) user!: {
  //   id: string;
  //   img: string;
  //   name: string;
  // };
  // @Output() select = new EventEmitter();

  // //option 3
  // get imagePath() {
  //   return 'assets/' + this.user.img;
  // }

  // onSelectedUser(){
  //   this.select.emit(this.user.id);
  // }

  // option 4
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  //option 4
  get imagePath() {
    return 'assets/' + this.user.img;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
// end of tutorial 3
