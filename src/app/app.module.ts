import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HlcClrFormModule } from '@ng-holistic/clr-forms'
import { CustomFieldWrapperComponent } from './custom-field-wrapper.component';
import { ClrIconModule } from '@clr/angular';

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//


@NgModule({
  imports: [ BrowserModule, ClrIconModule, HlcClrFormModule.forRoot(undefined, undefined, CustomFieldWrapperComponent) ],
  declarations: [ AppComponent, CustomFieldWrapperComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [CustomFieldWrapperComponent]
})
export class AppModule { }
