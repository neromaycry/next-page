import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent {

  tabstrips: any[];
  currentId: number;

  constructor(private router: Router) {
    this.tabstrips = [
      { id: 0, title: 'Home' },
      { id: 1, title: 'About' },
      { id: 2, title: 'Portfolio' },
      { id: 3, title: 'Contact' }
    ];
    this.currentId = 0;
  }

  onTabSwitch(id: number): void {
    this.currentId = id;
    switch (this.currentId) {
      case 0:
        this.router.navigate(['/intro']);
        break;
      case 3:
        this.router.navigate(['./intro/contact']);
        break;
    }
  }

  onHomeClick() {
    console.log('click home');
    this.router.navigate(['/intro']);
  }

  onContactClick() {
    console.log('click contact');
    this.router.navigate(['/intro/contact']);
  }

}