import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public observable: Observable<any>
  private popup: HTMLElement | null
  private close: HTMLElement | null

  constructor() {
    this.popup = null;
    this.close = null

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        if (window.location.href != 'http://localhost:4200/') {
          return
        } else {
          this.popup = document.getElementById('popup');
          this.close = document.getElementById('close');
          if (this.close)
            this.close.onclick = () => {
              if (this.popup)
                this.popup.setAttribute('style', 'display:none');
            }
          observer.next(this.popup);
        }
      }, 10000)
    })
  }

}
