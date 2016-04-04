"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GohamDjinn extends Card {
  constructor(game) {
    super(game, "Goham Djinn", "Invasion", "INV");
  }
}

module.exports = GohamDjinn;
