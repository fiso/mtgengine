"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../setM12/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, "Manabarbs", "Tenth Edition", "10E");
  }
}

module.exports = Manabarbs;
