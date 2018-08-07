"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntrapmentManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Entrapment Maneuver", "You Make the Cube", "PZ2");
  }
}

module.exports = EntrapmentManeuver;
