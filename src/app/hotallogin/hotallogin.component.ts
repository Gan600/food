import { Component } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-hotallogin',
  templateUrl: './hotallogin.component.html',
  styleUrls: ['./hotallogin.component.css']
})
export class HotalloginComponent {
  tableData: any[] = [];
  displayedColumns: string[] = ['sno', 'disease', 'cause', 'address', 'phone', 'edit'];
  newCause: any = {};
  editMode: boolean = false;

  constructor(private causesService: CausesService) {}

  ngOnInit(): void {
    this.getCausesData();
  }

  show() {
    const t1 = document.querySelector('.t1') as HTMLElement;
    const t1DisplayStyle = window.getComputedStyle(t1).getPropertyValue('display');
    if (t1DisplayStyle === 'none') {
      t1.style.display = 'block';
    } else {
      t1.style.display = 'none';
    }
  }

  getCausesData(): void {
    this.causesService.getCausesData().subscribe(
      (data) => {
        this.tableData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  insertData(cause: any) {
    this.causesService.insertCause(cause).subscribe(
      (response) => {
        console.log(response);
        this.getCausesData();
        this.resetForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateData(cause: any) {
    this.causesService.updateCause(cause).subscribe(
      (response) => {
        console.log(response);
        this.getCausesData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editData(element: any) {
    if (this.editMode) {
      this.updateData(element);
    }
    this.editMode = !this.editMode;
  }

  deleteData(id: number) {
    this.causesService.deleteCause(id).subscribe(
      (response) => {
        console.log(response);
        this.getCausesData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  resetForm() {
    this.newCause = {};
    const t1 = document.querySelector('.t1') as HTMLElement;
    t1.style.display = 'none';
  }
}
