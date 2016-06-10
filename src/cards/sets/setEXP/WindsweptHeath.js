"use strict";
const Constants = require ("../../../Constants");
const WindsweptHeathBase = require("../setpJGP/WindsweptHeath");

class WindsweptHeath extends WindsweptHeathBase {
  constructor (game) {
    super(game, "Windswept Heath", "Zendikar Expedition", "EXP");
  }
}

module.exports = WindsweptHeath;
