"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenSurveyor extends Card {
  constructor(game) {
    super(game, "Aven Surveyor", "Fate Reforged", "FRF");
  }
}

module.exports = AvenSurveyor;
