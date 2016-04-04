"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavraQueenoftheGolgari extends Card {
  constructor(game) {
    super(game, "Savra, Queen of the Golgari", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SavraQueenoftheGolgari;
