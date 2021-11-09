import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarqrPage } from './generarqr.page';

describe('GenerarqrPage', () => {
  let component: GenerarqrPage;
  let fixture: ComponentFixture<GenerarqrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarqrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
