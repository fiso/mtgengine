"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodReckoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Reckoning", "Magic 2013", "M13");
  }
}

module.exports = BloodReckoning;
