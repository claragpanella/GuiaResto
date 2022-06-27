import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IGroup } from '../models/IGroup';
import { IResto } from '../models/IResto';

@Injectable({
  providedIn: 'root'
})
export class GuiarestoService {
  private serverUrl: string = `http://localhost:9000`; //json-server url

  constructor(private httpClient: HttpClient) {

  }

  // OBTENER RESTOS
  public getAllRestos(): Observable<IResto[]> {
    let dataURL: string = `${this.serverUrl}/restos`;
    return this.httpClient.get<IResto[]>(dataURL).pipe(catchError(this.handleError));
  }

  // OBTENER UN RESTO
  public getResto(restoId: string): Observable<IResto> {
    let dataURL: string = `${this.serverUrl}/restos/${restoId}`;
    return this.httpClient.get<IResto>(dataURL).pipe(catchError(this.handleError));
  }

  // CREAR RESTO
  public createResto(resto: IResto): Observable<IResto> {
    let dataURL: string = `${this.serverUrl}/restos`;
    return this.httpClient.post<IResto>(dataURL, resto).pipe(catchError(this.handleError));
  }

  // EDITAR RESTO
  public updateResto(resto: IResto, restoId: string): Observable<IResto> {
    let dataURL: string = `${this.serverUrl}/restos/${restoId}`;
    return this.httpClient.put<IResto>(dataURL, resto).pipe(catchError(this.handleError));
  }

  // ELIMINAR RESTO
  public deleteResto(restoId: string): Observable<{}> {
    let dataURL: string = `${this.serverUrl}/restos/${restoId}`;
    return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
  }

  // OBTENER GRUPOS
  public getAllGroups(): Observable<IGroup[]> {
    let dataURL: string = `${this.serverUrl}/groups`;
    return this.httpClient.get<IGroup[]>(dataURL).pipe(catchError(this.handleError));
  }

  // OBTENER UN SOLO GRUPO
  public getGroup(resto: IResto): Observable<IGroup> {
    let dataURL: string = `${this.serverUrl}/groups/${resto.groupId}`;
    return this.httpClient.get<IGroup>(dataURL).pipe(catchError(this.handleError));
  }

  // MANEJO DE ERRORES
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // Error del Cliente
      errorMessage = `Error: ${error.error.message}`
    }
    else {
      // Error del Servidor
      errorMessage = `Status: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
