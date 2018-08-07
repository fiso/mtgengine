"use strict";
const Constants = require ("../../../Constants");
const TitheDrinkerBase = require("../setC17/TitheDrinker");

class TitheDrinker extends TitheDrinkerBase {
  constructor (game) {
    super(game, "Tithe Drinker", "Dragon's Maze", "DGM");
  }
}

module.exports = TitheDrinker;
