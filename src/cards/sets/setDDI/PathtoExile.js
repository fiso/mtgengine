"use strict";
const Constants = require ("../../../Constants");
const PathtoExileBase = require("../setARC/PathtoExile");

class PathtoExile extends PathtoExileBase {
  constructor (game) {
    super(game, "Path to Exile", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PathtoExile;
