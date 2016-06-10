"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThassasEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Thassa's Emissary", "Theros", "THS");
  }
}

module.exports = ThassasEmissary;
