import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container">
        <a
          class="navbar-brand"
          routerLink="/"
          [routerLinkActive]="['active']"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ title }}</a
        >
        <button
          class="navbar-toggler hidden-sm-up"
          type="button"
          (click)="isNavbarCollapsed = !isNavbarCollapsed"
          data-target="#navbarsDefault"
          aria-controls="navbarsDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div [ngbCollapse]="isNavbarCollapsed" class="collapse navbar-collapse" id="navbarsDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="movie"
                [routerLinkActive]="['active']"
                [routerLinkActiveOptions]="{ exact: true }"
                >Movies</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="movieShow"
                [routerLinkActive]="['active']"
                [routerLinkActiveOptions]="{ exact: true }"
                >Movie Show</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="about"
                [routerLinkActive]="['active']"
                [routerLinkActiveOptions]="{ exact: true }"
                >About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    '.btn-link { color: rgba(255,255,255,.5); text-decoration: none; }',
    // tslint:disable-next-line: max-line-length
    '.btn-link.focus, .btn-link:focus, .btn-link.hover, .btn-link:hover { color: rgba(255,255,255,.75); text-decoration: none; box-shadow: none; }'
  ]
})
export class NavbarComponent {
  @Input() title: string
  isNavbarCollapsed = true
}
