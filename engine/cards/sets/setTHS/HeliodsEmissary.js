"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeliodsEmissary extends Card {
  constructor(game) {
    super(game, "Heliod's Emissary", "Theros", "THS");
  }
}

module.exports = HeliodsEmissary;
