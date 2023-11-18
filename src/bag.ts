import { Ore, Ingot } from './types/types';
import { _SMELTVALUE } from './balancing/balancing';
import valuation from './valuation';

export default class Bag {
  private ores: Ore[] = [];
  private ingots: Ingot[] = [];
  private value: number = 0;

  // Ores
  get getOres() {
    return this.ores;
  }
  set addOre(ore: Ore) {
    this.ores.push(ore);
  }

  // Smelt
  smelt() {
    this.ores.forEach((ore) => {
      this.addIngot = {
        name: ore.name,
        purity: ore.purity / _SMELTVALUE,
        value: valuation(ore),
      };
    });
    this.ores = [];
  }

  // Ingots
  get getIngots() {
    return this.ingots;
  }
  set addIngot(ingot: Ingot) {
    this.ingots.push(ingot);
    this.value = 0;
    this.ingots.forEach((ingot) => {
      this.value = this.value + ingot.value;
    });
  }

  // Value
  get getValue() {
    return this.value;
  }
}
