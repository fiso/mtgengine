"use strict";
const Constants = require ("../../../Constants");
const FoolsDemiseBase = require("../setC14/FoolsDemise");

class FoolsDemise extends FoolsDemiseBase {
  constructor(game) {
    super(game, "Fool's Demise", "Time Spiral", "TSP");
  }
}

module.exports = FoolsDemise;
