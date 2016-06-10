"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Mine", "Homelands", "HML");
  }
}

module.exports = OrcishMine;
