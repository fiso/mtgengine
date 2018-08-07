"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitansRevenge extends UnimplementedCard {
  constructor (game) {
    super(game, "Titan's Revenge", "Morningtide", "MOR");
  }
}

module.exports = TitansRevenge;
