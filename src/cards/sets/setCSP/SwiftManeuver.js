"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Maneuver", "Coldsnap", "CSP");
  }
}

module.exports = SwiftManeuver;
