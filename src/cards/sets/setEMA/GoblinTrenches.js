"use strict";
const Constants = require ("../../../Constants");
const GoblinTrenchesBase = require("../setAPC/GoblinTrenches");

class GoblinTrenches extends GoblinTrenchesBase {
  constructor (game) {
    super(game, "Goblin Trenches", "Eternal Masters", "EMA");
  }
}

module.exports = GoblinTrenches;
