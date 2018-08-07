"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Two-Headed Dragon", "Archenemy", "ARC");
  }
}

module.exports = TwoHeadedDragon;
