import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-upload',
  templateUrl: './delete-upload.component.html',
  styleUrls: ['./delete-upload.component.css']
})
export class DeleteUploadComponent implements OnInit {

  @Input() fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
