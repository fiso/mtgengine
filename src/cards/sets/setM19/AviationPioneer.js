"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AviationPioneer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aviation Pioneer", "Core Set 2019", "M19");
  }
}

module.exports = AviationPioneer;
