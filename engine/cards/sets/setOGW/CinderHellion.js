"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderHellion extends UnimplementedCard {
  constructor(game) {
    super(game, "Cinder Hellion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CinderHellion;
