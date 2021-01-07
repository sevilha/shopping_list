import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';

const userLang = navigator.language;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  langs = ['en', 'pt'];
  widthSidenav = '0';
  instance;

  constructor(
    private translateService: TranslateService
  ) {
    if (!firebase.default.apps.length) {
      firebase.default.initializeApp(environment.firebaseConfig);
    }
  }

  public ngOnInit(): void {
    let browserlang = this.translateService.getBrowserLang();
    if (this.langs.indexOf(browserlang) > -1) {
      this.translateService.setDefaultLang(browserlang);
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(function () {
      var elem = document.querySelector('.sidenav');
      this.instance = M.Sidenav.init(elem);
    }, 0)
  }

  public useLanguage(lang: string): void {
    console.log('Language ==> ', lang)
    this.translateService.use(lang);
  }

  openNav() {
    this.instance.open();
  }

  closeNav() {
    this.instance.open();
  }
}
