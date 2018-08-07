"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class Island extends Card {
  constructor (game) {
    super(game, "Island", "Commander 2018", "C18");

    this.addAbility(
      [],
      (controller, modes, targets, parameters) => {
        controller.addToManaPool(Constants.manaTypes.BLUE, 1);
      }, true);
  }
}

module.exports = Island;
