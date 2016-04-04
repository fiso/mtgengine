"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndenturedDjinn extends Card {
  constructor(game) {
    super(game, "Indentured Djinn", "Mercadian Masques", "MMQ");
  }
}

module.exports = IndenturedDjinn;
