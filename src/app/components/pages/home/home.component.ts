import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from "src/app/Moments";
import { environment } from 'src/environments/environments';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoment: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl;

  // todo search

  constructor(private momentsService: MomentService,){}

    ngOnInit(): void {
      this.momentsService.getMoments().subscribe((items) => {
        const data = items.data
        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString(
            'pt-BR'
          )
        })
        this.allMoment = data
        this.moments = data
      })
    }
}
