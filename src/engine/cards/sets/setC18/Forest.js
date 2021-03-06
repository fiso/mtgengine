'use strict';
const Constants = require('../../../Constants');
const Card = require('../../../objects/Card');

class Forest extends Card {
  constructor (game) {
    super(game, 'Forest', 'Commander 2018', 'C18');

    this.ready().then(() => {
      this.addAbility(
        [Constants.costs.TAP],
        (controller) => {
          controller.addToManaPool(Constants.manaTypes.GREEN, 1);
        }, true);
    });
  }
}

module.exports = Forest;
