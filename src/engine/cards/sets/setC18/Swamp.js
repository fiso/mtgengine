'use strict';
const Constants = require('../../../Constants');
const Card = require('../../../objects/Card');

class Swamp extends Card {
  constructor (game) {
    super(game, 'Swamp', 'Commander 2018', 'C18');

    this.ready().then(() => {
      this.addAbility(
        [Constants.costs.TAP],
        (controller) => {
          controller.addToManaPool(Constants.manaTypes.BLACK, 1);
        }, true);
    });
  }
}

module.exports = Swamp;
