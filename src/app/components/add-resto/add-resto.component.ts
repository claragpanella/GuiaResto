import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResto } from 'src/app/models/IResto';
import { GuiarestoService } from 'src/app/services/guiaresto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  public loading: boolean = false;
  public resto: IResto = {} as IResto;
  public errorMessage: string | null = null;

  constructor(private guiarestoService : GuiarestoService,
    private router : Router) {}

  ngOnInit(): void {

  }

  public createSubmit(){
    this.guiarestoService.createResto(this.resto).subscribe((data) => {
      this.router.navigate(['/']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate(['/restos/add']).then();
    });
  }

}
