"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsDuet extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Duet", "Exodus", "EXO");
  }
}

module.exports = DeathsDuet;
