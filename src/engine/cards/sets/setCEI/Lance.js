"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setSUM/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Lance;
