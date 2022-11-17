import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { MessageService } from 'primeng/api';
import { AppStateFormInfo, AppStateImageSpec } from 'src/app/app-state';
import { ImageSpec, UploadImg } from './upload-img.model';

@Component({
  selector: 'fintranet-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
  // providers: [MessageService]
})

export class UploadImgComponent implements OnInit {
  click_upload = false;
  click_saveToStore = false;
  uploadImg: any;
  objHeader = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  // constructor(private store: Store<AppStateFormInfo>) {  }
  constructor(private router: Router, private store: Store<AppStateImageSpec>) {  }
  ngOnInit(): void { }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadImg = file
    }

    this.click_upload = true;
    this.sendFileToDatabase();
  }

  sendFileToDatabase() {
   // http service for call api and save
  }

  clickSaveHandler(): void {
    this.click_saveToStore = true;
    this.store.dispatch({
      type: 'UPL_IMG',
      payload: <ImageSpec> {
        name: this.uploadImg.name,
        size: this.uploadImg.size,
        type: this.uploadImg.type,
      }
    });
  }

  nextHandler() {
    this.router.navigate(['form']);
  }

}
