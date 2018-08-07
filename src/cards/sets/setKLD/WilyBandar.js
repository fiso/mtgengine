"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WilyBandar extends UnimplementedCard {
  constructor (game) {
    super(game, "Wily Bandar", "Kaladesh", "KLD");
  }
}

module.exports = WilyBandar;
