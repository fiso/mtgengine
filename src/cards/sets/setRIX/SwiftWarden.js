"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Warden", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SwiftWarden;
