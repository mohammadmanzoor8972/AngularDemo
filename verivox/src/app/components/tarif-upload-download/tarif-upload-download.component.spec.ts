import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifUploadDownloadComponent } from './tarif-upload-download.component';

describe('TarifUploadDownloadComponent', () => {
  let component: TarifUploadDownloadComponent;
  let fixture: ComponentFixture<TarifUploadDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifUploadDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifUploadDownloadComponent);
    component = fixture.componentInstance;
    component.downloadSpeed = "23232"
    component.uploadSpeed = "43323"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
