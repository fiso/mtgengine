"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnderhandedDesigns extends UnimplementedCard {
  constructor (game) {
    super(game, "Underhanded Designs", "Kaladesh", "KLD");
  }
}

module.exports = UnderhandedDesigns;
