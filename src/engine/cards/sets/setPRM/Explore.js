"use strict";
const Constants = require ("../../../Constants");
const ExploreBase = require("../setC18/Explore");

class Explore extends ExploreBase {
  constructor (game) {
    super(game, "Explore", "Magic Online Promos", "PRM");
  }
}

module.exports = Explore;
