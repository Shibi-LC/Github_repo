import { Component } from '@angular/core';
import { HttpService } from './services/apicalls.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';
  filterTerm: string = '';
  fetchedData = [];
  results = [];
  constructor(private http: HttpService) {

  }
  search() {
    this.http.getData(`https://api.github.com/users/${this.searchTerm}/repos`)
      .toPromise()
      .then((res: any) => {
        this.fetchedData = res;
        this.results = this.fetchedData;
      });
  }

  clearSearch() {
    this.searchTerm = '';
    this.results = [];
  }

  clearFilterTerm() {
    this.filterTerm = '';
    this.results = [];
  }

  filterMethod() {
    let intermediateResult = [];
    intermediateResult = this.fetchedData.filter(e => {
      return e.name.toLowerCase().includes(this.filterTerm.toLowerCase());
    });
    this.results = intermediateResult;
  }

}
