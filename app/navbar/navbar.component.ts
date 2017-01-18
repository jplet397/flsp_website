import {Component} from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  styleUrls: ['app/navbar/navbar.component.css'],
})


export class NavbarComponent {
  public isHomeActive: boolean = true;
  public isBuybackActive: boolean = true;

  constructor() {
    this.settAllFalse();
    this.setOnTrue(window.location.href);
  }

  onSelect(event: any): void {
    if (this.settAllFalse()) {
      this.setOnTrue(event.target.href);
    }
  }

  private setOnTrue(href: string) {
    let switcher = this.getSegment(href,1);
    switch (switcher) {
      case "":
        this.isHomeActive = true;
        break;
      case "home":
        this.isHomeActive = true;
        break;
      case "buyback":
        this.isBuybackActive = true;
        break;
    }
  }

  private settAllFalse(): boolean {
    this.isHomeActive = false;
    this.isBuybackActive = false;
    return true;
  }

   private getSegment (url:string, index:number) : string {
    return url.replace(/^https?:\/\//, '').split('/')[index];
  }
}

