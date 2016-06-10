"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavernofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavern of Souls", "Avacyn Restored", "AVR");
  }
}

module.exports = CavernofSouls;
