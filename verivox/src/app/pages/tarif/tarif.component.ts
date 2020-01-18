import { Component, OnInit } from '@angular/core';
import { TarifService } from '../../services/tarif.service';
import { TarifModel } from 'src/app/interface/tarif.model';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.sass']
})
export class TarifComponent implements OnInit {

  public tariffList: TarifModel[];
  private sortAmount = true;
  private sortDownload = true;
  private sortUpload = true;

  constructor(public tarifService: TarifService) { }

  ngOnInit() {
    this.tarifService.getTariffPlanLists()
    .then(tariff => this.tariffList = tariff);
  }

  sortData(type){
    switch(type) {
      case "amount" :
          this.sortAmount ?
          this.tariffList.sort((x: TarifModel, y: TarifModel) => x.cost.effectiveCost.amount - y.cost.effectiveCost.amount) :
          this.tariffList.sort((x: TarifModel, y: TarifModel) => y.cost.effectiveCost.amount - x.cost.effectiveCost.amount);
          this.sortAmount = !this.sortAmount;
          break;
      case "download" :
          this.sortDownload ?
          this.tariffList.sort((x: TarifModel, y: TarifModel) => x.contractTerm.downloadSpeed.amount - y.contractTerm.downloadSpeed.amount):
          this.tariffList.sort((x: TarifModel, y: TarifModel) => y.contractTerm.downloadSpeed.amount - x.contractTerm.downloadSpeed.amount)
          this.sortDownload = !this.sortDownload;
          break;
      case "upload" :
          this.sortDownload ?
          this.tariffList.sort((x: TarifModel, y: TarifModel) => x.contractTerm.uploadSpeed.amount - y.contractTerm.uploadSpeed.amount):
          this.tariffList.sort((x: TarifModel, y: TarifModel) => y.contractTerm.uploadSpeed.amount - x.contractTerm.uploadSpeed.amount)
          this.sortUpload= !this.sortUpload;
          break;
      default :
      break;
    }
  }

}
