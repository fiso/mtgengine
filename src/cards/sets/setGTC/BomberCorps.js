"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BomberCorps extends UnimplementedCard {
  constructor (game) {
    super(game, "Bomber Corps", "Gatecrash", "GTC");
  }
}

module.exports = BomberCorps;
