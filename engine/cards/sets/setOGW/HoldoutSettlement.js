"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldoutSettlement extends UnimplementedCard {
  constructor(game) {
    super(game, "Holdout Settlement", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HoldoutSettlement;
