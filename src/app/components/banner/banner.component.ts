import { Component,ElementRef, HostListener } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  paused: boolean = false;
  constructor(private fire: FireService,private el: ElementRef){

  }

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  toggleAnimation(event: any) {
    this.paused = event.type === 'mouseenter';
    this.el.nativeElement.querySelector('.text-slider').classList.toggle('paused', this.paused);
  }

}
