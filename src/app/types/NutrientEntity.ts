import { Nutrient } from "./nutrient";

export interface NutrientEntity {
    id: number;
    name: string;
    image: string;
    amount: number;
    unit: string;
    estimatedCostValue: number;
    estimatedCostUnit: string;
    consistency: string;
    nutrients: Nutrient[];
    caloricBreakdownPercentProtein: number;
    caloricBreakdownPercentFat: number;
    caloricBreakdownPercentCarbs: number;
    weightPerServingAmount: number;
    weightPerServingUnit: string;
}
