import { MeasurementGroup } from 'src/app/types/measurement-group';


export const ingredientMeasureOptions: MeasurementGroup[] = [
    {
      type: 'Popular',
      measurement : [
        {value: 'gram (g)'},
        {value: 'ounce (oz)'},
        {value: 'pound (lb)'},
        {value: 'teaspoon (tsp)'},
        {value: 'tablespoon (tbsp)'},
        {value: 'cup (cup)'},
        {value: 'amount'},
        {value: 'pinch'}
      ]
    },
    {
      type: 'Weight',
      measurement : [
        {value: 'milligram (mg)'},
        {value: 'kilogram (kg)'},
        {value: 'gram (g)'},
        {value: 'ounce (oz)'},
        {value: 'pound (lb)'}
      ]
    },
    {
      type: 'Volume',
      measurement: [
        {value: 'teaspoon (tsp)'},
        {value: 'tablespoon (tbsp)'},
        {value: 'cup (cup)'},
        {value: 'fluid ounce (fl oz)'},
        {value: 'pint (pt)'},
        {value:'quart (qt)'},
        {value: 'gallon (gal)'},
        {value: 'milliliters (ml)'},
        {value: 'liters (l)'}
      ]
    }
  ];