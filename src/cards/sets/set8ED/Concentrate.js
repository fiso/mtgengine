"use strict";
const Constants = require ("../../../Constants");
const ConcentrateBase = require("../setC14/Concentrate");

class Concentrate extends ConcentrateBase {
  constructor (game) {
    super(game, "Concentrate", "Eighth Edition", "8ED");
  }
}

module.exports = Concentrate;
