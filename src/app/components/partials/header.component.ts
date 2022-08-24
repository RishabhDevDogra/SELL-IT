import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() title?: string;

  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    if (confirm('Are you sure?')) {
      this.auth.clear();
      this.router.navigateByUrl("/");
    }
  }
}
