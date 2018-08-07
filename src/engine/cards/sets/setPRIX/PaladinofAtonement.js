"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaladinofAtonement extends UnimplementedCard {
  constructor (game) {
    super(game, "Paladin of Atonement", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = PaladinofAtonement;
