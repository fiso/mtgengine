"use strict";
const Constants = require ("../../../Constants");
const FetidHeathBase = require("../setA25/FetidHeath");

class FetidHeath extends FetidHeathBase {
  constructor (game) {
    super(game, "Fetid Heath", "Zendikar Expeditions", "EXP");
  }
}

module.exports = FetidHeath;
