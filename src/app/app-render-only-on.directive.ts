import {
  Directive,
  Inject,
  Input,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appRenderOnlyOn]',
})
export class AppRenderOnlyOnDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @Input()
  set appRenderOnlyOn(env: any) {
    if(env === 'server' && 
    isPlatformServer(this.platformId) ||
     env == 'browser' && 
     isPlatformBrowser(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
