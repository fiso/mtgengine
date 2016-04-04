"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottingLegion extends Card {
  constructor(game) {
    super(game, "Rotting Legion", "Magic 2011", "M11");
  }
}

module.exports = RottingLegion;
