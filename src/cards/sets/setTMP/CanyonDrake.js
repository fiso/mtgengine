"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanyonDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Canyon Drake", "Tempest", "TMP");
  }
}

module.exports = CanyonDrake;
