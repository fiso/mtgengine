"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemporalFissureBase = require("../setSCG/TemporalFissure.js");

class TemporalFissure extends TemporalFissureBase {
  constructor(game) {
    super(game, "Temporal Fissure", "Vintage Masters", "VMA");
  }
}

module.exports = TemporalFissure;
