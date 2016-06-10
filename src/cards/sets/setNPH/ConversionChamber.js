"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConversionChamber extends UnimplementedCard {
  constructor (game) {
    super(game, "Conversion Chamber", "New Phyrexia", "NPH");
  }
}

module.exports = ConversionChamber;
