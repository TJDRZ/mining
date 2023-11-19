import * as readline from 'readline';
import veinRL from './src/readline/veinReadline';
import bagRL from './src/readline/bagReadline';
import Bag from './src/classes/bag';
import Vein from './src/classes/vein';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bag = new Bag();
let vein = new Vein();

(function indexRL() {
  rl.question(
    'Type:\n 1 for vein options,\n 2 for bag options,\n 3 to exit...\n ',
    (res) => {
      switch (Number(res)) {
        case 1:
          veinRL(rl, indexRL, vein, bag);
          break;
        case 2:
          bagRL(rl, indexRL, bag);
          break;
        case 3:
          rl.close();
          break;
        default:
          console.log('Sorry, that is not a proper choice');
          indexRL();
      }
    },
  );
})();
