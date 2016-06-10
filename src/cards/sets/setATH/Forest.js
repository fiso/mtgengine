"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class Forest extends Card {
  constructor (game) {
    super(game, "Forest", "Anthologies", "ATH");

    this.addAbility(
      [],
      (controller, modes, targets, parameters) => {
        controller.addToManaPool(Constants.manaTypes.GREEN, 1);
      }, true);
  }
}

module.exports = Forest;
