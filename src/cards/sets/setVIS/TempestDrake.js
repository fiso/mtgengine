"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempestDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempest Drake", "Visions", "VIS");
  }
}

module.exports = TempestDrake;
