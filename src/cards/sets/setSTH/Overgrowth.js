"use strict";
const Constants = require ("../../../Constants");
const OvergrowthBase = require("../set9ED/Overgrowth");

class Overgrowth extends OvergrowthBase {
  constructor (game) {
    super(game, "Overgrowth", "Stronghold", "STH");
  }
}

module.exports = Overgrowth;
