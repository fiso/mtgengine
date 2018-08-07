"use strict";
const Constants = require ("../../../Constants");
const ExploreBase = require("../setC18/Explore");

class Explore extends ExploreBase {
  constructor (game) {
    super(game, "Explore", "Modern Masters 2017", "MM3");
  }
}

module.exports = Explore;
