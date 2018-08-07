"use strict";
const Constants = require ("../../../Constants");
const ConcentrateBase = require("../setE02/Concentrate");

class Concentrate extends ConcentrateBase {
  constructor (game) {
    super(game, "Concentrate", "Commander 2014", "C14");
  }
}

module.exports = Concentrate;
