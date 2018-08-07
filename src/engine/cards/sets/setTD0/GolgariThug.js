"use strict";
const Constants = require ("../../../Constants");
const GolgariThugBase = require("../setDDJ/GolgariThug");

class GolgariThug extends GolgariThugBase {
  constructor (game) {
    super(game, "Golgari Thug", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GolgariThug;
