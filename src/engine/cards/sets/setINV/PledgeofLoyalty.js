"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PledgeofLoyalty extends UnimplementedCard {
  constructor (game) {
    super(game, "Pledge of Loyalty", "Invasion", "INV");
  }
}

module.exports = PledgeofLoyalty;
