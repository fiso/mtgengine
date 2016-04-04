"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingVent extends Card {
  constructor(game) {
    super(game, "Shambling Vent", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ShamblingVent;
