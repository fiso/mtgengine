"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Mutiny", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Mutiny;
