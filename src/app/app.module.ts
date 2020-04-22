import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AddMuseumComponent} from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import {MuseumService} from './services/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes:Routes = [
  { path: 'add', component: AddMuseumComponent },

  { path: 'museum/:reference', component: MuseumDetailComponent },

  { path: '', component: IndexComponent },
  {path: "**", component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
