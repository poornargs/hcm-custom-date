import { Component, OnInit } from '@angular/core';

import * as docx from 'docx-preview';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  previewLocalUrl: any = '';
  previewLiveUrl: any = '';

  localFileData: any = '';
  liveFileData: any = '';

  // api with no token
  noTokenPdf: any =
    'https://api-multi-staging.akriviahcm.com/candidate/inline_file/recruit_candidate_documents%2FCAND_DOC_dlTkFgSSv.pdf';
  noTokenDocx: any =
    'https://api-multi-staging.akriviahcm.com/candidate/inline_file/letter_templates%2Fadmin_20211124175708.docx';
  noTokenFileDocx: any =
    'https://api-multi-staging.akriviahcm.com/test/letter_preview/inline_file/letter_templates%2Fadmin_20211124175709.docx';
  noTokenFetchFileDocx: any =
    'https://api-multi-staging.akriviahcm.com/test/fetch_file/letter_templates%2Fadmin_20211124175709.docx';

  doc: any = '';
  docLinkAddress: any =
    'https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx';

  reiResumeUrl1: any =
    'https://api-multi-staging.akriviahcm.com/inline_file/recruit_resumes%2FCAND_RES_C9HX0wfWt.pdf';
  reiResumeUrl2: any =
    'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175705.docx';
  reiResumeUrl3: any =
    'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175708.docx';
  reiResumeUrl4: any =
    'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175709.docx';
  reiResumeUrlWithOutToken1: any =
    'https://api-multi-staging.akriviahcm.com/candidate/inline_file/letter_templates%2Fadmin_20211124175709.docx';

  urls: any = [
    {
      url: 'https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx',
      isToken: 'No',
      isHcm: 'No',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/candidate/inline_file/letter_templates%2Fadmin_20211124175708.docx',
      isToken: 'No',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/test/letter_preview/inline_file/letter_templates%2Fadmin_20211124175709.docx',
      isToken: 'No',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/test/fetch_file/letter_templates%2Fadmin_20211124175709.docx',
      isToken: 'No',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175705.docx',
      isToken: 'Yes',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175708.docx',
      isToken: 'Yes',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/inline_file/letter_templates%2Fadmin_20211124175709.docx',
      isToken: 'Yes',
      isHcm: 'Yes',
    },
    {
      url: 'https://api-multi-staging.akriviahcm.com/candidate/inline_file/letter_templates%2Fadmin_20211124175709.docx',
      isToken: 'No',
      isHcm: 'Yes',
    },
    {
      url: 'https://filesamples.com/samples/document/docx/sample3.docx',
      isToken: 'No',
      isHcm: 'No',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  fileProgress(fileInput: any) {
    this.localFileData = <File>fileInput.target.files[0];
    console.log(fileInput, ' file Input');
    console.log(this.localFileData, ' This localFileData');
    // this.docxPreview(this.localFileData, "container-docx-22");
    // this.preview();
  }

  loadLocal() {
    this.clearDocument('container-docx-22');
    this.docxPreview(this.localFileData, 'container-docx-22');
  }

  clearLocal() {
    console.log('Clear Local');
    this.clearDocument('container-docx-22');
  }

  async loadLive() {
    this.clearDocument('container-docx-33');
    const blobData = await this.getBlobFromUrl(this.previewLiveUrl);
    this.docxPreview(blobData, 'container-docx-33');
  }

  clearLive() {
    console.log('Clear Live');
    this.clearDocument('container-docx-33');
  }

  // preview() {
  //   // Show preview
  //   var mimeType = this.fileData.type;
  //   // if (mimeType.match(/image\/*/) == null) {
  //   //   return;
  //   // }

  //   var reader = new FileReader();
  //   reader.readAsDataURL(this.fileData);
  //   reader.onload = (_event) => {
  //     this.previewUrl = reader.result;
  //     this.doc = reader.result;
  //     console.log(reader, "Reader rr Full");
  //     console.log(reader.result, "Reader rr Result");

  //     // this.docxPreview(reader.result);
  //   };
  // }

  docxPreview(docData: any, docId: any) {
    // container-docx-22
    docx
      .renderAsync(docData, document.getElementById(docId))
      .then((x) => console.log('docx: finished'));
  }

  getBlobFromUrl = (myUrl) => {
    return new Promise((resolve, reject) => {
      // {'Access-Control-Allow-Origin':'*'}
      let request = new XMLHttpRequest();
      request.open('GET', myUrl, true);
      request.setRequestHeader("Access-Control-Allow-Origin", "*");
      request.responseType = 'blob';
      request.onload = () => {
        resolve(request.response);
      };
      request.onerror = reject;
      request.send();
    });
  };

  clearDocument(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
}
