import { Injectable } from '@angular/core';
import { PdfViewerComponent } from '../../../modules/shared/components/pdf-viewer/pdf-viewer.component';
import { ModalsService } from '../modals/modals.service';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor(private modalsService: ModalsService) {

  }

  showPdf(options) {
    const config = {
      class: 'modal-pdf-viewer',
      initialState: {
        ...options
      }
    };
    this.modalsService.openModal(PdfViewerComponent, config);
  }

}
