"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeightoftheUnderworldBase = require("../setBNG/WeightoftheUnderworld.js");

class WeightoftheUnderworld extends WeightoftheUnderworldBase {
  constructor(game) {
    super(game, "Weight of the Underworld", "Magic Origins", "ORI");
  }
}

module.exports = WeightoftheUnderworld;
