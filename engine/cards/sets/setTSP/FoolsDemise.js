"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoolsDemiseBase = require("../setC14/FoolsDemise.js");

class FoolsDemise extends FoolsDemiseBase {
  constructor(game) {
    super(game, "Fool's Demise", "Time Spiral", "TSP");
  }
}

module.exports = FoolsDemise;
