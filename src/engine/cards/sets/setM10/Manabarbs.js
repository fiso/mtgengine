"use strict";
const Constants = require ("../../../Constants");
const ManabarbsBase = require("../setM12/Manabarbs");

class Manabarbs extends ManabarbsBase {
  constructor (game) {
    super(game, "Manabarbs", "Magic 2010", "M10");
  }
}

module.exports = Manabarbs;
