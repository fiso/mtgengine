"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReinforcedBulwark extends UnimplementedCard {
  constructor(game) {
    super(game, "Reinforced Bulwark", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ReinforcedBulwark;
