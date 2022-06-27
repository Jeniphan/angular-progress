import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private templatePortal!: TemplatePortal<any>;
  private overlayRef: OverlayRef = this.createOverlay();

  indeterminate: Subject<boolean> = new Subject();

  constructor(
    private overlay: Overlay
  ) {
    this.indeterminate.subscribe(
      show => {
        if (show && !this.overlayRef.hasAttached()) {
          this.showSpiner();
        } else if (!show && this.overlayRef.hasAttached()) {
          this.hideSpinner()
        }
      }
    )
  }


  private createOverlay(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })
  }

  public showSpiner() {
    this.overlayRef.attach(this.templatePortal)
  }

  public hideSpinner() {
    this.overlayRef.detach()
  }

  attach(templatePortalContent: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    this.templatePortal = new TemplatePortal(templatePortalContent, viewContainerRef);

  }

}
