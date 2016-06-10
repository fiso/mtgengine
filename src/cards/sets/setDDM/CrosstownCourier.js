"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrosstownCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Crosstown Courier", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = CrosstownCourier;
