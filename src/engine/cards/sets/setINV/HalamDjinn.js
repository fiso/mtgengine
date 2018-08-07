"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalamDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Halam Djinn", "Invasion", "INV");
  }
}

module.exports = HalamDjinn;
