"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Signet", "Archenemy", "ARC");
  }
}

module.exports = DimirSignet;
