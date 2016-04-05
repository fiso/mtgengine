"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkDeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Deal", "Fate Reforged", "FRF");
  }
}

module.exports = DarkDeal;
