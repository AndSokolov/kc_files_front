import {Component, OnInit} from '@angular/core';
import {PostService} from "../data";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  constructor( private dService: PostService) {}
  ngOnInit() {
    this.dService.getPosts().subscribe();
  }
}
