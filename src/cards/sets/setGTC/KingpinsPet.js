"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingpinsPet extends UnimplementedCard {
  constructor (game) {
    super(game, "Kingpin's Pet", "Gatecrash", "GTC");
  }
}

module.exports = KingpinsPet;
