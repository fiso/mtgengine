"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinGliderBase = require("../set8ED/GoblinGlider.js");

class GoblinGlider extends GoblinGliderBase {
  constructor(game) {
    super(game, "Goblin Glider", "Starter 1999", "S99");
  }
}

module.exports = GoblinGlider;
