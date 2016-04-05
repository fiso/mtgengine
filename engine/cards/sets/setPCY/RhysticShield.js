"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Shield", "Prophecy", "PCY");
  }
}

module.exports = RhysticShield;
