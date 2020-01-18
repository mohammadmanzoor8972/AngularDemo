import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarif-upload-download',
  templateUrl: './tarif-upload-download.component.html',
  styleUrls: ['./tarif-upload-download.component.scss']
})
export class TarifUploadDownloadComponent implements OnInit {

  @Input() downloadSpeed:any = "0";
  @Input() uploadSpeed:any ="0";
  constructor() { }

  ngOnInit() {
  }

}
