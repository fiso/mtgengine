"use strict";
const Constants = require ("../../../Constants");
const RelicofProgenitusBase = require("../setEMA/RelicofProgenitus");

class RelicofProgenitus extends RelicofProgenitusBase {
  constructor (game) {
    super(game, "Relic of Progenitus", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = RelicofProgenitus;
