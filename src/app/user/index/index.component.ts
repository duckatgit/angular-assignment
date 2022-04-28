import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  users: User[] = [];
    
  constructor(public userService: UserService) { }
    
  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
}