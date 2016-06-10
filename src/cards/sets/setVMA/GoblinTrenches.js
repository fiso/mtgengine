"use strict";
const Constants = require ("../../../Constants");
const GoblinTrenchesBase = require("../setAPC/GoblinTrenches");

class GoblinTrenches extends GoblinTrenchesBase {
  constructor (game) {
    super(game, "Goblin Trenches", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinTrenches;
