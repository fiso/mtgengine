"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dragonrage extends Card {
  constructor(game) {
    super(game, "Dragonrage", "Fate Reforged", "FRF");
  }
}

module.exports = Dragonrage;
