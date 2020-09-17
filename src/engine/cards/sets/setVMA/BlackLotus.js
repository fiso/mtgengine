'use strict';
const Card = require('../../../objects/Card');
const Constants = require('../../../Constants');

class BlackLotus extends Card {
  constructor (game) {
    super(game, 'Black Lotus', 'Vintage Masters', 'VMA');

    this.ready().then(() => {
      this.addAbility(
        [Constants.costs.TAP, Constants.costs.SACRIFICE],
        async (controller) => {
          const chosenColor = await game.requireChoice(controller, [
            Constants.manaTypes.WHITE, Constants.manaTypes.BLUE,
            Constants.manaTypes.BLACK, Constants.manaTypes.RED,
            Constants.manaTypes.GREEN]);
          controller.addToManaPool(chosenColor, 3);
        }, true);
    });
  }
}

module.exports = BlackLotus;
