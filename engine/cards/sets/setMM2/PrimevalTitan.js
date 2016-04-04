"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimevalTitanBase = require("../setpGPX/PrimevalTitan.js");

class PrimevalTitan extends PrimevalTitanBase {
  constructor(game) {
    super(game, "Primeval Titan", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PrimevalTitan;
