"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class Swamp extends Card {
  constructor (game) {
    super(game, "Swamp", "Anthologies", "ATH");

    this.addAbility(
      [],
      (controller, modes, targets, parameters) => {
        controller.addToManaPool(Constants.manaTypes.BLACK, 1);
      }, true);
  }
}

module.exports = Swamp;
