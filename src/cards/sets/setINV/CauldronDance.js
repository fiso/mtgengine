"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CauldronDance extends UnimplementedCard {
  constructor (game) {
    super(game, "Cauldron Dance", "Invasion", "INV");
  }
}

module.exports = CauldronDance;
