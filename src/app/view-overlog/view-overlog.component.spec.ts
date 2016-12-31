/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewOverlogComponent } from './view-overlog.component';

describe('ViewOverlogComponent', () => {
  let component: ViewOverlogComponent;
  let fixture: ComponentFixture<ViewOverlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOverlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOverlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
