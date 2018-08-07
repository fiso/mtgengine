"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setVMA/Tundra");

class Tundra extends TundraBase {
  constructor (game) {
    super(game, "Tundra", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Tundra;
