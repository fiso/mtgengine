"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Maneuver", "Gatecrash", "GTC");
  }
}

module.exports = AerialManeuver;
