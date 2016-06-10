"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Charge", "Onslaught", "ONS");
  }
}

module.exports = AetherCharge;
