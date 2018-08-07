"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeFreighter extends UnimplementedCard {
  constructor (game) {
    super(game, "Renegade Freighter", "Kaladesh", "KLD");
  }
}

module.exports = RenegadeFreighter;
