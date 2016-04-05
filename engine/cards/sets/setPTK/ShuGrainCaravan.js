"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuGrainCaravan extends UnimplementedCard {
  constructor(game) {
    super(game, "Shu Grain Caravan", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuGrainCaravan;
