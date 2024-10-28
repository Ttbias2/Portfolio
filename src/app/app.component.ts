import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass,AboutMeComponent,ContactComponent,ProyectsComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioTv';
  window = 0;
  es=true;

  translate: TranslateService = inject(TranslateService);

  changeWindow(change:number){
    this.window = change;
  }

  changeLenguage(){

    if(this.es)
    {
      this.translate.use("en");
    }
    else{
      this.translate.use("es");
    }

    this.es=!this.es;

  }
  
}
