"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesasEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa's Emissary", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesasEmissary;
