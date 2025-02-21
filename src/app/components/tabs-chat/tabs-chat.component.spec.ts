import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsChatComponent } from './tabs-chat.component';

describe('TabsChatComponent', () => {
  let component: TabsChatComponent;
  let fixture: ComponentFixture<TabsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
