import { NgModule } from '@angular/core'; 
import { SafePipe } from '../../pipes/safe/safe';
@NgModule({
    declarations: [
        SafePipe
    ],
    exports: [
        SafePipe
    ]
})
export class SharedPipesModule {
}