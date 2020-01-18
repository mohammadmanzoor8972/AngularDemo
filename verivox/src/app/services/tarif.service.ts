import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarifModel, TarifRepsonse } from '../interface/tarif.model';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  constructor(private http: HttpClient) {}

async getTariffPlanLists(): Promise<TarifModel[]> {
  const tariffUrl = "./assets/data.json";
  try {
    const response: any = await this.http
    .get(tariffUrl)
    .toPromise();
    return response.offers as TarifModel[];
  } catch (error) {
    console.log(error);
  }
}
}
