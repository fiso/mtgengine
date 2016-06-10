"use strict";
const Constants = require ("../../../Constants");
const ExploreBase = require("../setDDO/Explore");

class Explore extends ExploreBase {
  constructor (game) {
    super(game, "Explore", "Worldwake", "WWK");
  }
}

module.exports = Explore;
