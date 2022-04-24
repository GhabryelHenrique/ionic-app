import { TabsPageModule } from './tabs/tabs.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    TabsPageModule,
  ]
})
export class SharedModule { }
