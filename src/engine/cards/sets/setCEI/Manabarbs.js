"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../setM12/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, "Manabarbs", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Manabarbs;
