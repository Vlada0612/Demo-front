import {Component} from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})

export class AddRecordComponent {

  files: any = [];

  public mask = {
    guide: true,
    showMask: true,
    mask: ['(', /\d/, /\d/, /\d/, ')',' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]
  };

  uploadFile(event) {
    for (let element of event) {
      this.files.push(element.name);
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
