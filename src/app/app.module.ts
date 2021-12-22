import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CaretaskComponent, SafeHtmlPipe } from './caretask/caretask.component';
import { SidebarComponent } from './caretask/sidebar/sidebar.component';
import { SubmenuComponent } from './caretask/submenu/submenu.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateContactoComponent,
    HeaderComponent,
    FooterComponent,
    CaretaskComponent,
    SidebarComponent,
    SubmenuComponent,
    SidebarContactComponent,
    SafeHtmlPipe,
    SomosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
