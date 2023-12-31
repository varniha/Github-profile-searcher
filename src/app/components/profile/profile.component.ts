import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos: any[] = [];
  username = '';

  constructor(private profileService: ProfileService) { 

  }

  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  pageSize = 10;
  currentPage = 1;

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  ngOnInit() {
  }

}