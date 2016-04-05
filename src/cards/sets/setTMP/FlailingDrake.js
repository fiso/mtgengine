"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlailingDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Flailing Drake", "Tempest", "TMP");
  }
}

module.exports = FlailingDrake;
