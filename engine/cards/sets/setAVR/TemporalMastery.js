"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalMastery extends Card {
  constructor(game) {
    super(game, "Temporal Mastery", "Avacyn Restored", "AVR");
  }
}

module.exports = TemporalMastery;
