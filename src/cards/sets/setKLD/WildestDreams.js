"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildestDreams extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildest Dreams", "Kaladesh", "KLD");
  }
}

module.exports = WildestDreams;
