"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrinkofMadness extends UnimplementedCard {
  constructor (game) {
    super(game, "Brink of Madness", "Urza's Legacy", "ULG");
  }
}

module.exports = BrinkofMadness;
