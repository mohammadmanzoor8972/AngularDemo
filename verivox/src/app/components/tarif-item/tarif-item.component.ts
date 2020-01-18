import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-tarif-item',
  templateUrl: './tarif-item.component.html',
  styleUrls: ['./tarif-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarifItemComponent implements OnInit {

  @Input() public data: any;
  constructor() { }
  ngOnInit() {
    console.log(this.data);
  }

}
