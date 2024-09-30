import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild } from '@angular/core'
import { RouterOutlet, RouterLink, Router } from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'
import { Navbar } from '../../components/navbar/navbar.component'
import { Footer } from '../../components/footer/footer.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Home implements OnInit {
  private meta = inject(Meta)
  private titleService = inject(Title)
  public router = inject(Router)

  ngOnInit(): void {
    this.titleService.setTitle('Chubby Designs | Website Design in San Antonio TX')
    this.meta.updateTag({ name: 'description', content: 'Helping smaller businesses obtain a website at a realistic cost that is more affordable and straight forward. We offer custom web design that makes the process seamless and hassle free. Contact us today!' })
    this.meta.updateTag({ property: 'og:image', content: 'https://www.chubbydesigns.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Chubby Designs | Website Design in San Antonio TX' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:description', content: 'Helping smaller businesses obtain a website at a realistic cost that is more affordable and straight forward. We offer custom web design that makes the process seamless and hassle free. Contact us today!' }, "property='og:description'")
    this.meta.updateTag({ property: 'og:url', content: 'https://www.chubbydesigns.com/home' }, "property='og:url'")
  }
}
