"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeavyInfantry extends Card {
  constructor(game) {
    super(game, "Heavy Infantry", "Magic Origins", "ORI");
  }
}

module.exports = HeavyInfantry;
