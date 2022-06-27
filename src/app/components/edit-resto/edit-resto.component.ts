import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResto } from 'src/app/models/IResto';
import { GuiarestoService } from 'src/app/services/guiaresto.service';

@Component({
  selector: 'app-edit-resto',
  templateUrl: './edit-resto.component.html',
  styleUrls: ['./edit-resto.component.css']
})
export class EditRestoComponent implements OnInit {
  public loading: boolean = false;
  public restoId: string | null = null;
  public resto: IResto = {} as IResto;
  public errorMessage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute,
    private guiarestoService: GuiarestoService,
    private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe((param) => {
      this.restoId = param.get('restoId');
    });
    if (this.restoId) {
      this.guiarestoService.getResto(this.restoId).subscribe((data) => {
        this.resto = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })

    }
  }

  public submitUpdate() {
    if (this.restoId) {
      this.guiarestoService.updateResto(this.resto, this.restoId).subscribe((data) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate([`/restos/edit/${this.resto.id}`]).then();
      });
    }
  }
}
