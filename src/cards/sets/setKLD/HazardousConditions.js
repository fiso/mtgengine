"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazardousConditions extends UnimplementedCard {
  constructor (game) {
    super(game, "Hazardous Conditions", "Kaladesh", "KLD");
  }
}

module.exports = HazardousConditions;
