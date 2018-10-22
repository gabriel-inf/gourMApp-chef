import { NgModule } from '@angular/core';
import { SharedPipesModule } from './shared-pipes-module/shared-pipes-module';
@NgModule({
	declarations: [SharedPipesModule],
	imports: [],
	exports: [SharedPipesModule]
})
export class ComponentsModule {}
