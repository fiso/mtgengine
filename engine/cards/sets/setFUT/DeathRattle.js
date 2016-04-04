"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathRattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Rattle", "Future Sight", "FUT");
  }
}

module.exports = DeathRattle;
