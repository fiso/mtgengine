"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodPet extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Pet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BloodPet;
