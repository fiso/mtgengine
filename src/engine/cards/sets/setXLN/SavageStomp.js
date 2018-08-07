"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageStomp extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Stomp", "Ixalan", "XLN");
  }
}

module.exports = SavageStomp;
