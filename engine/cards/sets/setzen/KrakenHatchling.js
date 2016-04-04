"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrakenHatchlingBase = require("../setM13/KrakenHatchling.js");

class KrakenHatchling extends KrakenHatchlingBase {
  constructor(game) {
    super(game, "Kraken Hatchling", "Zendikar", "ZEN");
  }
}

module.exports = KrakenHatchling;
