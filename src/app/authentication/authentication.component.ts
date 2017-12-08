import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  loading = false;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {
    this.router.navigateByUrl('main');
  }
}
