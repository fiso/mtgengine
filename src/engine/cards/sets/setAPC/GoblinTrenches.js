"use strict";
const Constants = require ("../../../Constants");
const GoblinTrenchesBase = require("../setEMA/GoblinTrenches");

class GoblinTrenches extends GoblinTrenchesBase {
  constructor (game) {
    super(game, "Goblin Trenches", "Apocalypse", "APC");
  }
}

module.exports = GoblinTrenches;
