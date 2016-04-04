"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazortipWhip extends UnimplementedCard {
  constructor(game) {
    super(game, "Razortip Whip", "Gatecrash", "GTC");
  }
}

module.exports = RazortipWhip;
