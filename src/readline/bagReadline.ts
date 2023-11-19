import * as readline from 'readline';
import Bag from '../classes/bag';

export default function bagRL(
  rl: readline.Interface,
  indexRL: () => void,
  bag: Bag,
) {
  rl.question(
    'Type:\n 1 to see your ores,\n 2 to smelt your ores,\n 3 to see your ingots,\n 4 to sell your ingots,\n 5 to see your money,\n 6 to return to menu...\n ',
    (res) => {
      switch (Number(res)) {
        case 1:
          bag.getOres.forEach((ore) => console.log(ore));
          bagRL(rl, indexRL, bag);
          break;
        case 2:
          bag.smelt();
          bag.getIngots.forEach((ingot) => console.log(ingot));
          bagRL(rl, indexRL, bag);
          break;
        case 3:
          bag.getIngots.forEach((ingot) => console.log(ingot));
          bagRL(rl, indexRL, bag);
          break;
        case 4:
          bag.sell();
          console.log(bag.getMoney);
          bagRL(rl, indexRL, bag);
          break;
        case 5:
          console.log(bag.getMoney);
          bagRL(rl, indexRL, bag);
          break;
        case 6:
          indexRL();
          break;
        default:
          console.log('Sorry, that is not a proper choice');
          bagRL(rl, indexRL, bag);
      }
    },
  );
}
