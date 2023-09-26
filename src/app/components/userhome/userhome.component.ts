import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  user$ = this.authService.currentUser$;
  users: any

  constructor(private authService: AuthenticationService, private firebase: FirebaseService ){}



  ngOnInit(): void {

    this.firebase.getUsers("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
    this.users = data
    console.log(this.users)
  
  });
    
  }





}
