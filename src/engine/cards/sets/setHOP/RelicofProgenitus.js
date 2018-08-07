"use strict";
const Constants = require ("../../../Constants");
const RelicofProgenitusBase = require("../setEMA/RelicofProgenitus");

class RelicofProgenitus extends RelicofProgenitusBase {
  constructor (game) {
    super(game, "Relic of Progenitus", "Planechase", "HOP");
  }
}

module.exports = RelicofProgenitus;
