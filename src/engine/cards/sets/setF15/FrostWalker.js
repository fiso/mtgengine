"use strict";
const Constants = require ("../../../Constants");
const FrostWalkerBase = require("../setFRF/FrostWalker");

class FrostWalker extends FrostWalkerBase {
  constructor (game) {
    super(game, "Frost Walker", "Friday Night Magic 2015", "F15");
  }
}

module.exports = FrostWalker;
