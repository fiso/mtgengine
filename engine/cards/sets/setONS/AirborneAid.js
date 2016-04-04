"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirborneAid extends UnimplementedCard {
  constructor(game) {
    super(game, "Airborne Aid", "Onslaught", "ONS");
  }
}

module.exports = AirborneAid;
