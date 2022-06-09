import { Category } from "./category";
import { Ingredient } from "./ingredient";
import { Instruction } from "./instruction";
import { RecipeUpdateNote } from "./recipeUpdateNote";

export interface Recipe {
    id?: number;
    userId?: string;
    ingredients?: Ingredient[];
    instructions?: Instruction[];
    title?: string;
    photoUrl?: string;
    categories?: Category[];
    cookTime?: number;
    prepTime?: number;
    notes?: RecipeUpdateNote[];
}