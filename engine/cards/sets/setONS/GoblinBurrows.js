"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBurrowsBase = require("../setDD3_EVG/GoblinBurrows.js");

class GoblinBurrows extends GoblinBurrowsBase {
  constructor(game) {
    super(game, "Goblin Burrows", "Onslaught", "ONS");
  }
}

module.exports = GoblinBurrows;
