import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio';
import { SobreMiComponent } from './sobre-mi/sobre-mi';
import { MisHabilidadesComponent } from './mis-habilidades/mis-habilidades';
import { ContactanosComponent } from './contactanos/contactanos';
import { UbicanosComponent } from './ubicanos/ubicanos';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'mis-habilidades', component: MisHabilidadesComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'ubicanos', component: UbicanosComponent },
];