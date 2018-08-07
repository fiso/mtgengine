"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavraQueenoftheGolgari extends UnimplementedCard {
  constructor (game) {
    super(game, "Savra, Queen of the Golgari", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SavraQueenoftheGolgari;
