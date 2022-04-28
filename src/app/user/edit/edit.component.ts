import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  user!: User;
  userForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['userId'];
    this.initForm();
    this.getUserDetail(this.id);
  }

  initForm() {
    this.userForm = this.fb.group({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
  }

  getUserDetail(id: number) {
    if (id) {
      this.userService.find(this.id).subscribe((data: User) => {
        this.user = data;
        this.userForm.patchValue(this.user);
      });
    }
  }

  submit() {
    console.log(this.userForm.value);
    this.router.navigateByUrl('user/index');
  }
}