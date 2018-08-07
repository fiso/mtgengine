"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcrobaticManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Acrobatic Maneuver", "Kaladesh", "KLD");
  }
}

module.exports = AcrobaticManeuver;
