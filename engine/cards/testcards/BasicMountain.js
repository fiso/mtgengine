"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasicMountain extends Card {
  constructor (game) {
    super(game, "Mountain");

    this.addAbility(
      [],
      function (controller, modes, targets, parameters) {
        this._game.log("Mountain ability activated");
        controller.addToManaPool(Constants.manaTypes.RED, 1);
      }.bind(this), true);
  }
}

module.exports = BasicMountain;
