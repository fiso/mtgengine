"use strict";
const Constants = require ("../../../Constants");
const TemporalFissureBase = require("../setSCG/TemporalFissure");

class TemporalFissure extends TemporalFissureBase {
  constructor (game) {
    super(game, "Temporal Fissure", "Vintage Masters", "VMA");
  }
}

module.exports = TemporalFissure;
