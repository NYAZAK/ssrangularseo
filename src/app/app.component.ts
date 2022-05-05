import { Component, Inject } from '@angular/core';
   import { PLATFORM_ID } from '@angular/core';
  import { isPlatformBrowser, isPlatformServer } from '@angular/common';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Rendu navigateur
    }
    if (isPlatformServer(this.platformId)) {
      // Rendu serveur SSR
    }
  }

}
