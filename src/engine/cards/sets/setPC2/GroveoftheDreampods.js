"use strict";
const Constants = require ("../../../Constants");
const GroveoftheDreampodsBase = require("../setPCA/GroveoftheDreampods");

class GroveoftheDreampods extends GroveoftheDreampodsBase {
  constructor (game) {
    super(game, "Grove of the Dreampods", "Planechase 2012", "PC2");
  }
}

module.exports = GroveoftheDreampods;
