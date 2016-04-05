"use strict";
const Constants = require ("../../../Constants");
const GoblinGoonBase = require("../setLGN/GoblinGoon");

class GoblinGoon extends GoblinGoonBase {
  constructor(game) {
    super(game, "Goblin Goon", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinGoon;
