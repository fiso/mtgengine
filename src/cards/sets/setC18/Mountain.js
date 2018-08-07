"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class Mountain extends Card {
  constructor (game) {
    super(game, "Mountain", "Commander 2018", "C18");

    this.addAbility(
      [],
      (controller, modes, targets, parameters) => {
        controller.addToManaPool(Constants.manaTypes.RED, 1);
      }, true);
  }
}

module.exports = Mountain;
