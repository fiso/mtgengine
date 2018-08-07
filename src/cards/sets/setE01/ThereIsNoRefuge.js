"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThereIsNoRefuge extends UnimplementedCard {
  constructor (game) {
    super(game, "There Is No Refuge", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ThereIsNoRefuge;
