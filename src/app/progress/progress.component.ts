import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<any>;


  constructor(
    private _viewContainerRef: ViewContainerRef,
    private loadingService: LoadingService

  ) { }
  @Input('color') color: ThemePalette;
  @Input('mode') mode!: ProgressSpinnerMode;
  @Input('strokeWidth') strokeWidth: number = 5;
  @Input('diameter') diameter: number = 100;
  @Input('value') value: number = 50;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadingService.attach(this.templatePortalContent, this._viewContainerRef)
  }
}
