"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AimHigh extends UnimplementedCard {
  constructor(game) {
    super(game, "Aim High", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AimHigh;
