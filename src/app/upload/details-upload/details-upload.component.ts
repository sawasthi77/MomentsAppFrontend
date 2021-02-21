import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }


}
