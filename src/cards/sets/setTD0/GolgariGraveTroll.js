"use strict";
const Constants = require ("../../../Constants");
const GolgariGraveTrollBase = require("../setDDJ/GolgariGraveTroll");

class GolgariGraveTroll extends GolgariGraveTrollBase {
  constructor (game) {
    super(game, "Golgari Grave-Troll", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GolgariGraveTroll;
