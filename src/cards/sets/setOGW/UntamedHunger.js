"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UntamedHunger extends UnimplementedCard {
  constructor(game) {
    super(game, "Untamed Hunger", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UntamedHunger;
