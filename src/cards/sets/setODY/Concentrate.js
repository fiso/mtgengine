"use strict";
const Constants = require ("../../../Constants");
const ConcentrateBase = require("../setE02/Concentrate");

class Concentrate extends ConcentrateBase {
  constructor (game) {
    super(game, "Concentrate", "Odyssey", "ODY");
  }
}

module.exports = Concentrate;
