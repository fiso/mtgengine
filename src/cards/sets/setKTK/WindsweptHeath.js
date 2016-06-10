"use strict";
const Constants = require ("../../../Constants");
const WindsweptHeathBase = require("../setpJGP/WindsweptHeath");

class WindsweptHeath extends WindsweptHeathBase {
  constructor (game) {
    super(game, "Windswept Heath", "Khans of Tarkir", "KTK");
  }
}

module.exports = WindsweptHeath;
