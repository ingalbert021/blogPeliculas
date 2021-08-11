//Importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';


//importar componentes a los cuales les quiero hacer una pagina 
 
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaPruebaComponent  } from './components/pagina-prueba/pagina-prueba.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';



//Array de rutas

const appRoutes: Routes = [

{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent},
{path: 'blog/articulo/:id', component: ArticleComponent},
{path: 'blog/crear', component: ArticleNewComponent},
{path: 'blog/editar/:id', component: ArticleEditComponent},
{path: 'buscar/:search', component: SearchComponent},
{path: 'formulario', component: FormularioComponent},
{path: 'peliculas', component: PeliculasComponent},

//si quieres que un parametro sea opcional  solo tienes que duplicar el mismo url pero sin el parametro ejemplo 
//NOTA: si quieres que sea opcional siempre tienes que estar arriba de la que tiene los parametros obligatorios para que funcione

{path: 'pagina-prueba', component: PaginaPruebaComponent},
{path: 'pagina-prueba/:nombre/:apellidos', component: PaginaPruebaComponent},



//NOTA: la ruta de error tiene que ser la ultima siempre siempre en caso contrario no funciona
{path: '**', component: ErrorComponent}


];

//Exportar el modulo de rutas 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);