"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConversionChamber extends Card {
  constructor(game) {
    super(game, "Conversion Chamber", "New Phyrexia", "NPH");
  }
}

module.exports = ConversionChamber;
