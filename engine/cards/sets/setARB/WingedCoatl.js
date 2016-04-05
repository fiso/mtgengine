"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingedCoatl extends UnimplementedCard {
  constructor(game) {
    super(game, "Winged Coatl", "Alara Reborn", "ARB");
  }
}

module.exports = WingedCoatl;
