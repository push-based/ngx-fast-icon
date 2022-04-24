import { Injectable, NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FastIconModule } from '@ngx-fast-icon';
import { IconLoadStrategySsr } from './ngx-fast-icon-ssr/icon-load.ssr.strategy';

@NgModule({
  declarations: [],
  imports: [
    AppModule,
    /**
     * **🚀 Perf Tip for LCP, CLS:**
     *
     * Setup SSR to increase LCP by shipping rendered HTML on first load.
     */
    ServerModule,
    ServerTransferStateModule,
    FastIconModule.forRoot({
      iconLoadStrategy: IconLoadStrategySsr,
      url: (name: string) => `assets/svg-icons/${name}.svg`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}