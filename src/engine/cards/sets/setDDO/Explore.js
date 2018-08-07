"use strict";
const Constants = require ("../../../Constants");
const ExploreBase = require("../setC18/Explore");

class Explore extends ExploreBase {
  constructor (game) {
    super(game, "Explore", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Explore;
