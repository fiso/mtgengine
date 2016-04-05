"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShroudedSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrouded Serpent", "Prophecy", "PCY");
  }
}

module.exports = ShroudedSerpent;
