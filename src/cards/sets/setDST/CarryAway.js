"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarryAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Carry Away", "Darksteel", "DST");
  }
}

module.exports = CarryAway;
