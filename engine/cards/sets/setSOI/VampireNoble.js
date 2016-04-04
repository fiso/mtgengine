"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireNoble extends Card {
  constructor(game) {
    super(game, "Vampire Noble", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VampireNoble;
