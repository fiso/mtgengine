"use strict";
const Constants = require ("../../../Constants");
const WildfireEmissaryBase = require("../setEMA/WildfireEmissary");

class WildfireEmissary extends WildfireEmissaryBase {
  constructor (game) {
    super(game, "Wildfire Emissary", "World Championship Decks 1997", "WC97");
  }
}

module.exports = WildfireEmissary;
