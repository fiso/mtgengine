"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErgRaiders extends UnimplementedCard {
  constructor(game) {
    super(game, "Erg Raiders", "Arabian Nights", "ARN");
  }
}

module.exports = ErgRaiders;
