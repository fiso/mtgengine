"use strict";
const Constants = require ("../../../Constants");
const WeightoftheUnderworldBase = require("../setORI/WeightoftheUnderworld");

class WeightoftheUnderworld extends WeightoftheUnderworldBase {
  constructor (game) {
    super(game, "Weight of the Underworld", "Born of the Gods", "BNG");
  }
}

module.exports = WeightoftheUnderworld;
