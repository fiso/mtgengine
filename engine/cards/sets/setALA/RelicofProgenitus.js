"use strict";
const Constants = require ("../../../Constants");
const RelicofProgenitusBase = require("../setMD1/RelicofProgenitus");

class RelicofProgenitus extends RelicofProgenitusBase {
  constructor(game) {
    super(game, "Relic of Progenitus", "Shards of Alara", "ALA");
  }
}

module.exports = RelicofProgenitus;
