"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakindiAeronaut extends UnimplementedCard {
  constructor(game) {
    super(game, "Makindi Aeronaut", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MakindiAeronaut;
