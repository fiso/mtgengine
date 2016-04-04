"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Nissa's Chosen", "WPN and Gateway", "pWPN");
  }
}

module.exports = NissasChosen;
