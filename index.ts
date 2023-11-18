import * as readline from 'readline';
import Bag from './src/bag';
import Vein from './src/vein';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bag = new Bag();
let vein = new Vein();

(function ask() {
  rl.question(
    'Type:\n 1 to mine,\n 2 to change veins,\n 3 to smelt,\n 4 to see your ores,\n 5 to see your ingots,\n 6 to see your value,\n 7 to exit...\n ',
    (res) => {
      switch (Number(res)) {
        case 1:
          bag.addOre = vein.createOre();
          bag.getOres.forEach((ore) => console.log(ore));
          ask();
          break;
        case 2:
          vein = new Vein();
          bag.addOre = vein.createOre();
          bag.getOres.forEach((ore) => console.log(ore));
          ask();
          break;
        case 3:
          bag.smelt();
          bag.getIngots.forEach((ingot) => console.log(ingot));
          ask();
          break;
        case 4:
          bag.getOres.forEach((ore) => console.log(ore));
          ask();
          break;
        case 5:
          bag.getIngots.forEach((ingot) => console.log(ingot));
          ask();
          break;
        case 6:
          console.log(bag.getValue);
          ask();
          break;
        case 7:
          rl.close();
          break;
        default:
          console.log('Sorry, that is not a proper choice');
          ask();
      }
    },
  );
})();
