'use strict';
const Constants = require('../../../Constants');
const Card = require('../../../objects/Card');

class Plains extends Card {
  constructor (game) {
    super(game, 'Plains', 'Commander 2018', 'C18');

    this.ready().then(() => {
      this.addAbility(
        [Constants.costs.TAP],
        (controller) => {
          controller.addToManaPool(Constants.manaTypes.WHITE, 1);
        }, true);
    });
  }
}

module.exports = Plains;
