"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidAttendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Void Attendant", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VoidAttendant;
