"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterArrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Arrest", "Aether Revolt", "AER");
  }
}

module.exports = ThopterArrest;
