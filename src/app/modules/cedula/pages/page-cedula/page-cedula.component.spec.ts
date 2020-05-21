import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCedulaComponent } from './page-cedula.component';

describe('PageCedulaComponent', () => {
  let component: PageCedulaComponent;
  let fixture: ComponentFixture<PageCedulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCedulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
