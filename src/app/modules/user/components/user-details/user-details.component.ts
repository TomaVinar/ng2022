import {Component, OnInit} from '@angular/core';
import {IUserDetails} from "../../models/userDetails.interface";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
    this.userService.getSingleUser(id).subscribe(value => this.userDetails = value as IUserDetails);
    })
  }

}
