import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstStepComponent } from './first-step/first-step.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FirstStepComponent],
  exports: [FirstStepComponent],
})
export class NgWebcomponentExampleModule {}
