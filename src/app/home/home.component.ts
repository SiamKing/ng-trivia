import { Component, OnInit } from '@angular/core';
import { UiService } from '../shared/ui.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit() { 
    this.uiService.navDisplayShow();
  }

}
