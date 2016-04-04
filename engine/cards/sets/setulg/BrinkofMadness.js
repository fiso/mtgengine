"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrinkofMadness extends Card {
  constructor(game) {
    super(game, "Brink of Madness", "Urza's Legacy", "ULG");
  }
}

module.exports = BrinkofMadness;
