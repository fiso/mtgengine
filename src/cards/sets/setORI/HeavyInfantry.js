"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavy Infantry", "Magic Origins", "ORI");
  }
}

module.exports = HeavyInfantry;
