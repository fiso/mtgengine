"use strict";
const Constants = require ("../../../Constants");
const TemporalFissureBase = require("../setDDS/TemporalFissure");

class TemporalFissure extends TemporalFissureBase {
  constructor (game) {
    super(game, "Temporal Fissure", "Scourge", "SCG");
  }
}

module.exports = TemporalFissure;
