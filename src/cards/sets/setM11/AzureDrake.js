"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzureDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Azure Drake", "Magic 2011", "M11");
  }
}

module.exports = AzureDrake;
