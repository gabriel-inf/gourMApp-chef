import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CozinhePage } from './cozinhe';

@NgModule({
  declarations: [
    CozinhePage,
  ],
  imports: [
    IonicPageModule.forChild(CozinhePage),
  ],
})
export class CozinhePageModule {}
