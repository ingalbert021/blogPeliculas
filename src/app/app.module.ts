import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";


/*este modulo es para que funcionen los formularios(obligatorio)*/
import { FormsModule } from '@angular/forms';

//obligatorio para que funcione la conexion de la 
//base de datos 
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { miComponente } from './components/mi-components/mi-component.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { PaginaPruebaComponent } from './components/pagina-prueba/pagina-prueba.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { EsParPipe  } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    miComponente,
    PruebaComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent,
    PaginaPruebaComponent,
    PeliculasComponent,
    PeliculaComponent,
   EsParPipe,
   ArticlesComponent,
   ArticleComponent,
   SearchComponent,
   ArticleNewComponent,
   ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
