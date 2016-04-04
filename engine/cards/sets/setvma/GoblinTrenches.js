"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinTrenchesBase = require("../setAPC/GoblinTrenches.js");

class GoblinTrenches extends GoblinTrenchesBase {
  constructor(game) {
    super(game, "Goblin Trenches", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinTrenches;
