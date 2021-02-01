import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueEditComponent } from './queue-edit.component';

describe('QueueEditComponent', () => {
  let component: QueueEditComponent;
  let fixture: ComponentFixture<QueueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
