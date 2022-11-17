import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'fintranet-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [{
            label: 'Upload Image',
            routerLink: 'upload-img'
          },
          {
            label: 'Form Information',
            routerLink: 'form'
          },
          {
            label: 'Select Person',
            routerLink: 'persons'
          },
          {
            label: 'Summary',
            routerLink: 'steps-display'
          }
      ];

      this.router.navigate(['upload-img'])
  }
}
