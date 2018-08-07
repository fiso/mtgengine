"use strict";
const Constants = require ("../../../Constants");
const WindsweptHeathBase = require("../setEXP/WindsweptHeath");

class WindsweptHeath extends WindsweptHeathBase {
  constructor (game) {
    super(game, "Windswept Heath", "Magic Online Promos", "PRM");
  }
}

module.exports = WindsweptHeath;
