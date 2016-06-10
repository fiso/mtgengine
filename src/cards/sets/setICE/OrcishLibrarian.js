"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishLibrarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Librarian", "Ice Age", "ICE");
  }
}

module.exports = OrcishLibrarian;
