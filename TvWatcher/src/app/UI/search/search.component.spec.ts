import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentBar } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponentBar;
  let fixture: ComponentFixture<SearchComponentBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponentBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
