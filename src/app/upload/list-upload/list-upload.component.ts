import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;
  images = [];
  modalImage: any;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.loadImages();
  }

   showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
       this.fileUploads = this.uploadService.getFiles();
     }
  }

  downloadThisImage(file) :Observable<any>{
    console.log('this got clicked');
    console.log(file);
    return this.uploadService.downloadFile(file.imageName);
  }

  loadImages(){
    this.uploadService.getFiles().subscribe(images => {
      this.images = images;
    },
    err => {
      return err;
    })
  }

  onDeleteClick(image){
    this.modalImage = image;
    const params = {
      imageId: this.modalImage.imageId
    };
    this.uploadService.deleteFile(params).subscribe(data =>{
      if(data.success){
        this.loadImages();
      }
      else{
        console.log("Some error occurred while deleting");
      }
    })
  }

  onDownloadClick(image){
    
    this.uploadService.downloadFile(image.imageName).subscribe(data =>{
      if(data.success){
        this.loadImages();
      }else{
        console.log("some error occurred while downloading the file");
      }
    })
  }
}
