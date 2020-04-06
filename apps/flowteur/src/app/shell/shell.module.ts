import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AquariumComponent } from './components/aquarium/aquarium.component';

@NgModule({
  declarations: [HeaderComponent, AquariumComponent],
  exports: [HeaderComponent, AquariumComponent],
  imports: [
    CommonModule
  ]
})
export class ShellModule { }
