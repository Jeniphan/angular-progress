import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.showSpiner()
  }

}
