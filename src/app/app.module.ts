import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendsComponent } from './friends/friends.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { FieldControlErrorComponent } from './shared/field-control-error/field-control-error.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoaderFactory } from 'src/factories/translate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListsComponent,
    ListComponent,
    SettingsComponent,
    FriendsComponent,
    FieldControlErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient] }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
