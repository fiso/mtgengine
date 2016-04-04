"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FriendlyFire extends Card {
  constructor(game) {
    super(game, "Friendly Fire", "Fate Reforged", "FRF");
  }
}

module.exports = FriendlyFire;
