"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExploreBase = require("../setDDO/Explore.js");

class Explore extends ExploreBase {
  constructor(game) {
    super(game, "Explore", "Worldwake", "WWK");
  }
}

module.exports = Explore;
