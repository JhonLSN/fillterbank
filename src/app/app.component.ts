import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faRightToBracket = faRightToBracket;
  title = 'fillter-bank';
  showHeaderFooter = true;
  hiddenRoutes = ['/register', '/user/profile'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showHeaderFooter = !this.hiddenRoutes.includes(event.url)
      }
    })
  }
}
