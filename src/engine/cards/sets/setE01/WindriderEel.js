"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindriderEel extends UnimplementedCard {
  constructor (game) {
    super(game, "Windrider Eel", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = WindriderEel;
