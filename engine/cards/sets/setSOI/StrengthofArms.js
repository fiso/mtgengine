"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofArms extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Arms", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StrengthofArms;
