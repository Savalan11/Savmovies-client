import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {
  /**
	* Uses Inject to get the movie details from the movie object
	*/
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string,
      Description: string,
    }
  ) { }

  ngOnInit(): void {
  }

}
