"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalFissure extends Card {
  constructor(game) {
    super(game, "Temporal Fissure", "Scourge", "SCG");
  }
}

module.exports = TemporalFissure;
