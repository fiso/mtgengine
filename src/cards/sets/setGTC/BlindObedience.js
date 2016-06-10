"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindObedience extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Obedience", "Gatecrash", "GTC");
  }
}

module.exports = BlindObedience;
