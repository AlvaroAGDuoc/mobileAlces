import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlujosPage } from './flujos.page';

describe('FlujosPage', () => {
  let component: FlujosPage;
  let fixture: ComponentFixture<FlujosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlujosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
