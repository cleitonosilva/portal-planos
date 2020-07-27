import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { TvAssinaturaComponent } from './components/tv-assinatura/tv-assinatura.component';
import { PlanosInternetComponent } from './components/planos-internet/planos-internet.component';
import { PlanosCelularComponent } from './components/planos-celular/planos-celular.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'planos-celular', component: PlanosCelularComponent },
  { path: 'planos-internet', component: PlanosInternetComponent },
  { path: 'tv-assinatura', component: TvAssinaturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
