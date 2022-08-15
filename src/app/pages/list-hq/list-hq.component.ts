import { Component, OnInit } from '@angular/core';
import { HqService } from 'src/app/services/hq.service';
import { Observable } from 'rxjs';
import { Hq } from 'src/app/models/hq';

@Component({
  selector: 'app-list-hq',
  templateUrl: './list-hq.component.html',
  styleUrls: ['./list-hq.component.sass']
})
export class ListHqComponent implements OnInit {

  _filterBy!: string;

  constructor(private hqService: HqService) { }

  allCommics!: Observable<any>;

  filteredComics: any[] = [];

  _comics: any[] = [];

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(){
    this.allCommics = this.hqService.allCommics();
  }

  // teste(){
  //   this.hqService.allCommics().subscribe({
  //     next: comic => {
  //      this._comics = comic;
  //      this.filteredComics = this._comics; 
  //     },
  //     error: err => console.log('Error', err)
  //   })
  // }

  // set filter(value: string) {
  //   this._filterBy = value;
  //   this.filteredComics = this._comics.filter((comic: any) => comic.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  // }

}
