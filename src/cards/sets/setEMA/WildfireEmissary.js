"use strict";
const Constants = require ("../../../Constants");
const WildfireEmissaryBase = require("../setBRB/WildfireEmissary");

class WildfireEmissary extends WildfireEmissaryBase {
  constructor (game) {
    super(game, "Wildfire Emissary", "Eternal Masters", "EMA");
  }
}

module.exports = WildfireEmissary;
