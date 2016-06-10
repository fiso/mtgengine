"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotGear extends UnimplementedCard {
  constructor (game) {
    super(game, "Riot Gear", "Gatecrash", "GTC");
  }
}

module.exports = RiotGear;
