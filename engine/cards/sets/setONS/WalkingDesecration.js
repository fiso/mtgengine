"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingDesecration extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Desecration", "Onslaught", "ONS");
  }
}

module.exports = WalkingDesecration;
