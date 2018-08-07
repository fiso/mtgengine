"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildCelebrants extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Celebrants", "Theros", "THS");
  }
}

module.exports = WildCelebrants;
