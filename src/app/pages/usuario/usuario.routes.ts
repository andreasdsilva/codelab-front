import { Routes } from "@angular/router";
import { UsuarioConsultaComponent } from "./usuario-consulta/usuario-consulta.component";
import { UsuarioCadastroComponent } from "./usuario-cadastro/usuario-cadastro.component";

export const usuarioRoutes: Routes = [
    {
        path: 'usuario',
        children: [
            {
                path: 'cadastro',
                component: UsuarioCadastroComponent
            },
            {
                path: 'consulta',
                component: UsuarioConsultaComponent
            },
            {
                path: '',
                redirectTo: 'consulta',
                pathMatch: 'full',
            },
        ]
    }
]