"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalEndurance extends UnimplementedCard {
  constructor(game) {
    super(game, "Unnatural Endurance", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UnnaturalEndurance;
