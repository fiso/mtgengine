"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvolvingWilds extends UnimplementedCard {
  constructor(game) {
    super(game, "Evolving Wilds", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EvolvingWilds;
