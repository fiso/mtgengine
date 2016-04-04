"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrieking Drake", "Visions", "VIS");
  }
}

module.exports = ShriekingDrake;
