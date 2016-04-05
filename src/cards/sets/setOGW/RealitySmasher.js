"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealitySmasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality Smasher", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RealitySmasher;
