import { Component, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-causes',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css'],
})
export class CustomerloginComponent implements OnInit {
  tableData: any[] = [];
  displayedColumns: string[] = ['sno', 'disease', 'cause', 'address', 'phone_number', 'edit'];
  newCause: any = {};
  filteredData: any[] = [];
  searchTerm: string = '';
  t1: any; // Declare t1 at the class level

  constructor(private causesService: CausesService) {}

  ngOnInit(): void {
    this.getCausesData();
  }

  show() {
    this.t1 = document.querySelector('.t1');
    const t1DisplayStyle = window.getComputedStyle(this.t1).getPropertyValue('display');
    if (t1DisplayStyle === 'none') {
      this.t1.style.display = 'block';
    } else {
      this.t1.style.display = 'none';
    }
  }

  getCausesData(): void {
    this.causesService.getCausesData().subscribe(
      (data) => {
        this.tableData = data;
        this.filteredData = data; // Initialize filteredData with the initial data
      },
      (error) => {
        console.error(error);
      }
    );
  }

  insertData(cause: any) {
    // ... (your existing insertData code)
  }

  updateData(cause: any) {
    // ... (your existing updateData code)
  }

  deleteData(id: number) {
    // ... (your existing deleteData code)
  }

  applyFilter() {
    // ... (your existing applyFilter code)
  }

  resetForm() {
    this.newCause = {};
    this.searchTerm = ''; // Clear the search term
    this.applyFilter(); // Show all data after form reset
    if (this.t1) {
      this.t1.style.display = 'none'; // Check if t1 exists before setting its style
    }
  }
}
