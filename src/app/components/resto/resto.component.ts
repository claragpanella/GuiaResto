import { Component, OnInit } from '@angular/core';
import { IResto } from 'src/app/models/IResto';
import { GuiarestoService } from 'src/app/services/guiaresto.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {
  public loading: boolean = false;
  public restos: IResto[] = [];
  public errorMessage: string | null = null;

  constructor(private guiarestoService: GuiarestoService) { }

  ngOnInit(): void {
    this.getAllRestoFromServer();
  }

  public getAllRestoFromServer(){
    this.loading = true;
    this.guiarestoService.getAllRestos().subscribe((data) =>{
      this.restos = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false
    });
  }

  public clickDeleteContact(restoId: string | undefined){
    if(restoId){
      this.guiarestoService.deleteResto(restoId).subscribe((data) => {
        this.getAllRestoFromServer();
      }, (error) => {
        this.errorMessage = error;
      });
    }

  }
}
