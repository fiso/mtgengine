"use strict";
const Constants = require ("../../../Constants");
const ExtinguishBase = require("../setPO2/Extinguish");

class Extinguish extends ExtinguishBase {
  constructor(game) {
    super(game, "Extinguish", "Starter 1999", "S99");
  }
}

module.exports = Extinguish;
