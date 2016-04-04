"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortifiedRampart extends UnimplementedCard {
  constructor(game) {
    super(game, "Fortified Rampart", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FortifiedRampart;
