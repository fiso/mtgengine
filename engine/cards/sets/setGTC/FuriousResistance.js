"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuriousResistance extends UnimplementedCard {
  constructor(game) {
    super(game, "Furious Resistance", "Gatecrash", "GTC");
  }
}

module.exports = FuriousResistance;
