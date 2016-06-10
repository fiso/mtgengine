"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathCharmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Charmer", "Prophecy", "PCY");
  }
}

module.exports = DeathCharmer;
