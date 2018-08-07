"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodPet extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Pet", "Seventh Edition", "7ED");
  }
}

module.exports = BloodPet;
