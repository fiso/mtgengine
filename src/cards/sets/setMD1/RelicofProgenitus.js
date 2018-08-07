"use strict";
const Constants = require ("../../../Constants");
const RelicofProgenitusBase = require("../setEMA/RelicofProgenitus");

class RelicofProgenitus extends RelicofProgenitusBase {
  constructor (game) {
    super(game, "Relic of Progenitus", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = RelicofProgenitus;
