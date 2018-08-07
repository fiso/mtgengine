"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishLumberjack extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Vintage Masters", "VMA");
  }
}

module.exports = OrcishLumberjack;
