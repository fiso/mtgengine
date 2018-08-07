"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TighteningCoils extends UnimplementedCard {
  constructor (game) {
    super(game, "Tightening Coils", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TighteningCoils;
