"use strict";
const Constants = require ("../../../Constants");
const WildfireEmissaryBase = require("../setEMA/WildfireEmissary");

class WildfireEmissary extends WildfireEmissaryBase {
  constructor (game) {
    super(game, "Wildfire Emissary", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WildfireEmissary;
