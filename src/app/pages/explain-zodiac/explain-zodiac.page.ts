import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Zodiac } from 'src/app/interfaces/zodiac';
@Component({
  selector: 'app-explain-zodiac',
  templateUrl: './explain-zodiac.page.html',
  styleUrls: ['./explain-zodiac.page.scss'],
})
export class ExplainZodiacPage implements OnInit {
  id:number=2
  meow:[];
    tongquan:Zodiac;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onClickGetResult() {
    

    this.apiService.searchZodiacByDate(this.id).subscribe(data => {
      console.log(data);
    });

  }
}
