"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtfulManeuver extends UnimplementedCard {
  constructor(game) {
    super(game, "Artful Maneuver", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ArtfulManeuver;
