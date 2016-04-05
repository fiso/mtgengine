"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticCave extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Cave", "Prophecy", "PCY");
  }
}

module.exports = RhysticCave;
