import { Ore } from '../types/types';
import {
  _GOLDVALUE,
  _SILVERVALUE,
  _COPPERVALUE,
  _IRONVALUE,
  _SMELTVALUE,
} from '../balancing/balancing';

export default function valuation(ore: Ore) {
  const smeltedPurity = ore.purity / _SMELTVALUE;
  switch (ore.name) {
    case 'gold':
      return smeltedPurity * _GOLDVALUE;
    case 'silver':
      return smeltedPurity * _SILVERVALUE;
    case 'copper':
      return smeltedPurity * _COPPERVALUE;
    case 'iron':
      return smeltedPurity * _IRONVALUE;
  }
}
