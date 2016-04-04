"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildfireEmissaryBase = require("../setBRB/WildfireEmissary.js");

class WildfireEmissary extends WildfireEmissaryBase {
  constructor(game) {
    super(game, "Wildfire Emissary", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = WildfireEmissary;
