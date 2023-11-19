import { Ore } from '../types/types';

export default class Vein {
  private name: number = Math.random();

  createOre() {
    const ore: Ore = { name: 'gold', purity: Math.random() };

    // Name
    if (this.name < 0.9 && this.name >= 0.7) {
      ore.name = 'silver';
    } else if (this.name < 0.7 && this.name >= 0.5) {
      ore.name = 'copper';
    } else if (this.name < 0.5 && this.name >= 0) {
      ore.name = 'iron';
    }

    // Purity
    if (ore.purity >= 0.995) ore.purity = 1;

    ore.purity = Number(ore.purity.toFixed(2));

    return ore;
  }
}
