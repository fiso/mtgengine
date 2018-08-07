"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GearshiftAce extends UnimplementedCard {
  constructor (game) {
    super(game, "Gearshift Ace", "Kaladesh", "KLD");
  }
}

module.exports = GearshiftAce;
