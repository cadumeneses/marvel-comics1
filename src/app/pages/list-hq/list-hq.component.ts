import { Component, OnInit } from '@angular/core';
import { HqService } from 'src/app/services/hq.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-hq',
  templateUrl: './list-hq.component.html',
  styleUrls: ['./list-hq.component.sass']
})
export class ListHqComponent implements OnInit {

  constructor(private hqService: HqService) { }

  allCommics!: Observable<any>;

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(){
    this.allCommics = this.hqService.allCommics();
  }

}
