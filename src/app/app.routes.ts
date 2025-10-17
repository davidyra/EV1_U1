import { Routes } from '@angular/router';
import { inicioC } from './inicio/inicio';
import { sobremiC } from './sobre-mi/sobre-mi';
import { mishabilidadesC } from './mis-habilidades/mis-habilidades';
import { contactanosC } from './contactanos/contactanos';
import { ubicanosC } from './ubicanos/ubicanos';

export const routes: Routes = [
    { path: '', component: inicioC },
    { path: 'sobre-mi', component: sobremiC },
    { path: 'mis-habilidades', component: mishabilidadesC },
    { path: 'contactanos', component: contactanosC },
    { path: 'ubicanos', component: ubicanosC }
];