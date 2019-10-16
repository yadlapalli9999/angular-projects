import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentMo } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponentMo;
  let fixture: ComponentFixture<SearchComponentMo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponentMo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentMo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
