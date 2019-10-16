import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template:`<form class="form-inline float-xs-right">
  <input class="form-control mr-sm-2"
               type="text"
               placeholder="Search">
     <button class="btn btn-outline-light my-2 my-sm-0"
                    type="submit">Search
          </button>
        </form>`,
  styleUrls: ['./search.component.css']
})
export class SearchComponentBar implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
