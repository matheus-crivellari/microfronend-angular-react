import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { ReactBoxComponent } from './react-box/react-box.component';

@NgModule({
    declarations: [
        ReactBoxComponent,
        TesteComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ReactBoxComponent,
        TesteComponent,
    ],
})
export class ComponentsModule { }
