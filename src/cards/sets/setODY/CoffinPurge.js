"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoffinPurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Coffin Purge", "Odyssey", "ODY");
  }
}

module.exports = CoffinPurge;
