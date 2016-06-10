"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Samite Archer", "Invasion", "INV");
  }
}

module.exports = SamiteArcher;
