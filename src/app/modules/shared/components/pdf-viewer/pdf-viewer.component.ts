import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../../core/services/modals/modals.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  base64: string;
  src: ArrayBuffer;
  error = false;
  totalPages: number;
  page = 1;
  buttons: boolean;
  zoom = 1.1;

  constructor(private modalsService: ModalsService) {

  }

  ngOnInit() {
    this.src = this.base64ToArrayBuffer(this.base64);
  }
​
  base64ToArrayBuffer(base64: string) {
    if (base64) {
      const binaryString =  window.atob(base64);
      const length = binaryString.length;
      const bytes = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    } else {
      this.error = true;
    }
  }
​
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
​
    if (this.totalPages > 1) {
      this.buttons = true;
    } else {
      this.buttons = false;
    }
  }
​
  nextPage() {
    this.page += 1;
  }
​
  previousPage() {
    this.page -= 1;
  }
​
  closeModal() {
    this.modalsService.closeModal();
  }

}
