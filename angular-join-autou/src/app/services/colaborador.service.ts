import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/Colaborador';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private httpClient: HttpClient) { }
  private colaboradorUrl: string = 'http://localhost:8080/colaborador';

  retrieveAll(): Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(this.colaboradorUrl);

  }

  loadByMatricula(matricula: number): Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(`${this.colaboradorUrl}/matricula/${matricula}`);
  }
}
