"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartialGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Martial Glory", "Gatecrash", "GTC");
  }
}

module.exports = MartialGlory;
