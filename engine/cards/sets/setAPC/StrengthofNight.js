"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Night", "Apocalypse", "APC");
  }
}

module.exports = StrengthofNight;
