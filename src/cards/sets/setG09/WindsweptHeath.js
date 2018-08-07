"use strict";
const Constants = require ("../../../Constants");
const WindsweptHeathBase = require("../setEXP/WindsweptHeath");

class WindsweptHeath extends WindsweptHeathBase {
  constructor (game) {
    super(game, "Windswept Heath", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = WindsweptHeath;
