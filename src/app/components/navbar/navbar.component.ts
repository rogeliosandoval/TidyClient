import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedService } from '../../services/shared.service'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class Navbar {
  public sharedService = inject(SharedService)

  public openNav(): void {
    if (this.sharedService.mobileNavOpen === false) {
      this.sharedService.mobileNavOpen = true
    } else {
      this.sharedService.mobileNavOpen = false
    }
  }
}
