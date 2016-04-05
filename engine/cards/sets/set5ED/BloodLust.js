"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodLust extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Lust", "Fifth Edition", "5ED");
  }
}

module.exports = BloodLust;
