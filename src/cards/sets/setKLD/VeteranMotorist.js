"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranMotorist extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Motorist", "Kaladesh", "KLD");
  }
}

module.exports = VeteranMotorist;
