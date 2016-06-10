"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class Plains extends Card {
  constructor (game) {
    super(game, "Plains", "Anthologies", "ATH");

    this.addAbility(
      [],
      (controller, modes, targets, parameters) => {
        controller.addToManaPool(Constants.manaTypes.WHITE, 1);
      }, true);
  }
}

module.exports = Plains;
