import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    NotificationsComponent,
    InfoUserComponent,
    FooterComponent,
    TitleComponent,
    MenuAdminComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    NotificationsComponent,
    InfoUserComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class CoreModule { }
