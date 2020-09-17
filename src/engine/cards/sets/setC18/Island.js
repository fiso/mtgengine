'use strict';
const Card = require('../../../objects/Card');
const Constants = require('../../../Constants');

class Island extends Card {
  constructor (game) {
    super(game, 'Island', 'Commander 2018', 'C18');

    this.ready().then(() => {
      this.addAbility(
        [Constants.costs.TAP],
        (controller) => {
          controller.addToManaPool(Constants.manaTypes.BLUE, 1);
        }, true);
    });
  }
}

module.exports = Island;
