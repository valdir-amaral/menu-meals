import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';
import {FoodModel} from './models/food.model'
import { MenuService } from './services/menu.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  loggedUser:string = '';
  subscription !: Subscription;
  items:FoodModel[] = [{strMeal: 'Oi', idMeal: 'wsa', strYoutube: 'https://', strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg'}]
  menuService: MenuService;
  
  constructor(private shared: SharedService, menuService: MenuService) {
    this.subscription = this.shared.getUsername().subscribe((user: string) => {
      this.loggedUser = user;
    })

    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.items = [];
    this.fetchProducts('a');
  }

  fetchProducts(filter: string) {
    this.menuService.getAll(filter).subscribe((res:any) => {
      this.items = res.meals;
    })
  }
  

  letters: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]
  
  
}
