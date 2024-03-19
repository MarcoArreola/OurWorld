import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreitaComponent } from './andreita.component';

describe('AndreitaComponent', () => {
  let component: AndreitaComponent;
  let fixture: ComponentFixture<AndreitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndreitaComponent]
    });
    fixture = TestBed.createComponent(AndreitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
