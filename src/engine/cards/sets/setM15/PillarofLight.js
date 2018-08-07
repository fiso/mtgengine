"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PillarofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Pillar of Light", "Magic 2015", "M15");
  }
}

module.exports = PillarofLight;
