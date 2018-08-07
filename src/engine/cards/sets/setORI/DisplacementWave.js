"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisplacementWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Displacement Wave", "Magic Origins", "ORI");
  }
}

module.exports = DisplacementWave;
