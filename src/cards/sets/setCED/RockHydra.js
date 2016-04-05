"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Rock Hydra", "Collector's Edition", "CED");
  }
}

module.exports = RockHydra;
