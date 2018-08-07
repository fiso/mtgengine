"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AviaryMechanic extends UnimplementedCard {
  constructor (game) {
    super(game, "Aviary Mechanic", "Kaladesh", "KLD");
  }
}

module.exports = AviaryMechanic;
