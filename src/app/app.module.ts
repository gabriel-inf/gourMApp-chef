import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { SafePipe } from '../pipes/safe/safe';
import { SharedPipesModule } from '../components/shared-pipes-module/shared-pipes-module';
import { DefinicoesPage } from '../pages/definicoes/definicoes';
import { PedidosPage } from '../pages/pedidos/pedidos';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetalhesPage,
    DefinicoesPage,
    PedidosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedPipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetalhesPage,
    DefinicoesPage,
    PedidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
