"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Knighthood extends Card {
  constructor(game) {
    super(game, "Knighthood", "Seventh Edition", "7ED");
  }
}

module.exports = Knighthood;
