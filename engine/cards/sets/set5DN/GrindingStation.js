"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrindingStation extends Card {
  constructor(game) {
    super(game, "Grinding Station", "Fifth Dawn", "5DN");
  }
}

module.exports = GrindingStation;
