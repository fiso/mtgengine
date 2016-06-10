"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileRedeemer extends UnimplementedCard {
  constructor (game) {
    super(game, "Vile Redeemer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VileRedeemer;
