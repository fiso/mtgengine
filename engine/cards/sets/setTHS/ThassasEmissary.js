"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThassasEmissary extends Card {
  constructor(game) {
    super(game, "Thassa's Emissary", "Theros", "THS");
  }
}

module.exports = ThassasEmissary;
