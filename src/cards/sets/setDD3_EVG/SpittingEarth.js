"use strict";
const Constants = require ("../../../Constants");
const SpittingEarthBase = require("../set6ED/SpittingEarth");

class SpittingEarth extends SpittingEarthBase {
  constructor (game) {
    super(game, "Spitting Earth", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SpittingEarth;
