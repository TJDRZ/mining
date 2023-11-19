import * as readline from 'readline';
import Vein from '../classes/vein';
import Bag from '../classes/bag';

export default function veinRL(
  rl: readline.Interface,
  indexRL: () => void,
  vein: Vein,
  bag: Bag,
) {
  rl.question(
    'Type:\n 1 to mine,\n 2 to change veins, \n 3 to return to menu...\n ',
    (res) => {
      switch (Number(res)) {
        case 1:
          bag.addOre = vein.createOre();
          bag.getOres.forEach((ore) => console.log(ore));
          veinRL(rl, indexRL, vein, bag);
          break;
        case 2:
          vein = new Vein();
          bag.addOre = vein.createOre();
          bag.getOres.forEach((ore) => console.log(ore));
          veinRL(rl, indexRL, vein, bag);
          break;
        case 3:
          indexRL();
          break;
        default:
          console.log('Sorry, that is not a proper choice');
          veinRL(rl, indexRL, vein, bag);
      }
    },
  );
}
