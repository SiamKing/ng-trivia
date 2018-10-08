import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onPlay() {
    this.dataService.setWelcome(false);
    this.router.navigate(['/setup']);
  }
}
