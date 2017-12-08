import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['login']).then(() =>{
        this.loading = false;
      });
    }, 3000);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res));
  }
}
