"use strict";
const Constants = require ("../../../Constants");
const FrostWalkerBase = require("../setFRF/FrostWalker");

class FrostWalker extends FrostWalkerBase {
  constructor (game) {
    super(game, "Frost Walker", "Magic Online Promos", "PRM");
  }
}

module.exports = FrostWalker;
