"use strict";
const Constants = require ("../../../Constants");
const GoblinGoonBase = require("../setDDT/GoblinGoon");

class GoblinGoon extends GoblinGoonBase {
  constructor (game) {
    super(game, "Goblin Goon", "You Make the Cube", "PZ2");
  }
}

module.exports = GoblinGoon;
