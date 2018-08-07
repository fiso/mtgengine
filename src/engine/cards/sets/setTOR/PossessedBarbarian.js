"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedBarbarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Possessed Barbarian", "Torment", "TOR");
  }
}

module.exports = PossessedBarbarian;
