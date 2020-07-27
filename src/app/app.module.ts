import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoDropdownModule } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoSlideModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvAssinaturaComponent } from './components/tv-assinatura/tv-assinatura.component';
import { PlanosInternetComponent } from './components/planos-internet/planos-internet.component';
import { PlanosCelularComponent } from './components/planos-celular/planos-celular.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [AppComponent, TvAssinaturaComponent, PlanosInternetComponent, PlanosCelularComponent, EmpresasComponent, AtendimentoComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoMenuModule,
    PoDropdownModule,
    PoModule,
    PoToolbarModule,
    PoFieldModule,
    RouterModule.forRoot([]),
    PoSlideModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
