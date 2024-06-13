import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodModel } from '../models/food.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl:string = "https://themealdb.com/api/json/v1/1"

  constructor(private http:HttpClient) { }

  getById(id: number): Observable<FoodModel> {
    return this.http.get<FoodModel>(`${this.baseUrl}/users/${id}`)
  }

  getAll(filter: string): Observable<FoodModel[]> {
    return this.http.get<FoodModel[]>(`${this.baseUrl}/search.php?f=${filter}`)
  }

  addUser(newUser: FoodModel): Observable<FoodModel> {
    return this.http.post<FoodModel>(`${this.baseUrl}/users`, newUser)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }

  updateUser(id:number, newUser: FoodModel): Observable<FoodModel> {
    return this.http.put<FoodModel>(`${this.baseUrl}/users/${id}`, newUser)
  }
}
