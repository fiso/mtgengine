"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HalamDjinn extends Card {
  constructor(game) {
    super(game, "Halam Djinn", "Invasion", "INV");
  }
}

module.exports = HalamDjinn;
