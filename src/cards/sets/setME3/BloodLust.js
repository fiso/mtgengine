"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodLust extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Lust", "Masters Edition III", "ME3");
  }
}

module.exports = BloodLust;
