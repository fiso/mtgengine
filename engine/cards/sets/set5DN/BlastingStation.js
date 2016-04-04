"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlastingStation extends Card {
  constructor(game) {
    super(game, "Blasting Station", "Fifth Dawn", "5DN");
  }
}

module.exports = BlastingStation;
