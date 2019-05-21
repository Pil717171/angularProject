import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkblockComponent } from './linkblock.component';

describe('LinkblockComponent', () => {
  let component: LinkblockComponent;
  let fixture: ComponentFixture<LinkblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
