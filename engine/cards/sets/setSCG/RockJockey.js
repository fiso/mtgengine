"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockJockey extends UnimplementedCard {
  constructor(game) {
    super(game, "Rock Jockey", "Scourge", "SCG");
  }
}

module.exports = RockJockey;
