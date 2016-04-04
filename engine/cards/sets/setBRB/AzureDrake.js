"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzureDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Azure Drake", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AzureDrake;
