"use strict";
const Constants = require ("../../../Constants");
const ExploreBase = require("../setC18/Explore");

class Explore extends ExploreBase {
  constructor (game) {
    super(game, "Explore", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Explore;
