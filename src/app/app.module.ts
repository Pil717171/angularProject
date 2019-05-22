import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBotComponent } from './header-bot/header-bot.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { TestInputComponent } from './test-input/test-input.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderBotComponent,
    MainBlockComponent,
    TestInputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
