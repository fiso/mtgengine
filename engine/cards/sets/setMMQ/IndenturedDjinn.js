"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndenturedDjinn extends UnimplementedCard {
  constructor(game) {
    super(game, "Indentured Djinn", "Mercadian Masques", "MMQ");
  }
}

module.exports = IndenturedDjinn;
