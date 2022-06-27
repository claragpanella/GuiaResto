import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResto } from 'src/app/models/IResto';
import { GuiarestoService } from 'src/app/services/guiaresto.service';

@Component({
  selector: 'app-view-resto',
  templateUrl: './view-resto.component.html',
  styleUrls: ['./view-resto.component.css']
})
export class ViewRestoComponent implements OnInit {
  public loading: boolean = false;
  public restoId: string | null = null;
  public resto:IResto = {} as IResto;
  public errorMessage: string | null = null;

  constructor(private activateRoute: ActivatedRoute,
    private guiarestoService: GuiarestoService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.restoId = param.get('restoId')
    });
    if(this.restoId){
      this.loading =  true;
      this.guiarestoService.getResto(this.restoId).subscribe((data) => {
        this.resto = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });
    }

  }

  public isNotEmpty(){
    return Object.keys(this.resto).length > 0;
  }

}
