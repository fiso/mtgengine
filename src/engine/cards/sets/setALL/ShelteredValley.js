"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteredValley extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheltered Valley", "Alliances", "ALL");
  }
}

module.exports = ShelteredValley;
