"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggressiveMammoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggressive Mammoth", "Core Set 2019", "M19");
  }
}

module.exports = AggressiveMammoth;
