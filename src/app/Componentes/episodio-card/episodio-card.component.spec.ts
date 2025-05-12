import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodioCardComponent } from './episodio-card.component';

describe('EpisodioCardComponent', () => {
  let component: EpisodioCardComponent;
  let fixture: ComponentFixture<EpisodioCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), EpisodioCardComponent]
}).compileComponents();

    fixture = TestBed.createComponent(EpisodioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
