"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../set6ED/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor(game) {
    super(game, "Spitting Earth", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SpittingEarth;
