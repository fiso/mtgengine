"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Silver Drake", "Media Inserts", "pMEI");
  }
}

module.exports = SilverDrake;
