"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkLibrarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Librarian", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkLibrarian;
