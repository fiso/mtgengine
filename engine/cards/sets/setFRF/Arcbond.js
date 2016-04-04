"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Arcbond extends Card {
  constructor(game) {
    super(game, "Arcbond", "Fate Reforged", "FRF");
  }
}

module.exports = Arcbond;
