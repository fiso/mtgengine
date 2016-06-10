"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../set6ED/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, "Manabarbs", "Fifth Edition", "5ED");
  }
}

module.exports = Manabarbs;
