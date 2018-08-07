"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Moon", "Masters 25", "A25");
  }
}

module.exports = BloodMoon;
