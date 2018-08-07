"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlayingTendrils extends UnimplementedCard {
  constructor (game) {
    super(game, "Flaying Tendrils", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FlayingTendrils;
