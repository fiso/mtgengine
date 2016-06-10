"use strict";
const Constants = require ("../../../Constants");
const ConcentrateBase = require("../setC14/Concentrate");

class Concentrate extends ConcentrateBase {
  constructor (game) {
    super(game, "Concentrate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Concentrate;
