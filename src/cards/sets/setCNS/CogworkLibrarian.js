"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkLibrarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Librarian", "Conspiracy", "CNS");
  }
}

module.exports = CogworkLibrarian;
