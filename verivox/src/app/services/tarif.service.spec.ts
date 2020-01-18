import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {  TarifService } from './tarif.service';

describe('TarifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarifService]
    });
  });

  it('should be created', () => {
    const tarifService = TestBed.get(TarifService);
    expect(tarifService).toBeTruthy();
   });

  it('should have tariff list', () => {
    const tarifService = TestBed.get(TarifService);
    expect(tarifService.getTariffPlanLists).toBeTruthy();
  });


});
