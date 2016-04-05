"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSurveyor extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Surveyor", "Fate Reforged", "FRF");
  }
}

module.exports = AvenSurveyor;
