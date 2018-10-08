import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onPlay() {
    this.dataService.setWelcome(false);
    this.router.navigate(['/setup']);
  }

}
