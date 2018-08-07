"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../setEVG/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor (game) {
    super(game, "Spitting Earth", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = SpittingEarth;
