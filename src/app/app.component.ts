import { Component, OnInit } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loadingService: LoadingService) {

  }
  ngOnInit(): void {
  }
  title = 'angular-tailwind';
}
