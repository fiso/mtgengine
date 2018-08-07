"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Demise", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SuddenDemise;
