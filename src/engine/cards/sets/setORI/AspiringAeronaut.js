"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AspiringAeronaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Aspiring Aeronaut", "Magic Origins", "ORI");
  }
}

module.exports = AspiringAeronaut;
