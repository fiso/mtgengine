"use strict";
const Constants = require ("../../../Constants");
const GoblinGoonBase = require("../setDDT/GoblinGoon");

class GoblinGoon extends GoblinGoonBase {
  constructor (game) {
    super(game, "Goblin Goon", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinGoon;
