"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravityNegator extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravity Negator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GravityNegator;
