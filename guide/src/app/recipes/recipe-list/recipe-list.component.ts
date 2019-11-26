import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This Simply a test",
      "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/07/fetucciniconbrocoli_1.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
