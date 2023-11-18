export interface Ore {
  name: 'gold' | 'silver' | 'copper' | 'iron';
  purity: number;
}

export interface Ingot extends Ore {
  value: number;
}
