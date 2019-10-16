import { Component, OnInit } from '@angular/core';
import {Navitem} from '../nav/navitem'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appName:string = "TV Watcher";
  navItems:Navitem[];
  constructor() { }

  ngOnInit() {
  this.navItems= [
    {routerLink:"",label:'Home',active:false},
    {routerLink:"/search",label:'Find Shows',active:false}
  ]
  console.log(this.navItems)
  }

}
