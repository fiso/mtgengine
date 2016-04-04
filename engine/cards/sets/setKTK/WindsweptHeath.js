"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindsweptHeathBase = require("../setpJGP/WindsweptHeath.js");

class WindsweptHeath extends WindsweptHeathBase {
  constructor(game) {
    super(game, "Windswept Heath", "Khans of Tarkir", "KTK");
  }
}

module.exports = WindsweptHeath;
