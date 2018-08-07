"use strict";
const Constants = require ("../../../Constants");
const WindsweptHeathBase = require("../setEXP/WindsweptHeath");

class WindsweptHeath extends WindsweptHeathBase {
  constructor (game) {
    super(game, "Windswept Heath", "World Championship Decks 2004", "WC04");
  }
}

module.exports = WindsweptHeath;
