"use strict";
const Constants = require ("../../../Constants");
const FetidHeathBase = require("../setEVE/FetidHeath");

class FetidHeath extends FetidHeathBase {
  constructor(game) {
    super(game, "Fetid Heath", "Zendikar Expedition", "EXP");
  }
}

module.exports = FetidHeath;
