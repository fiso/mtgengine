"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitansRevenge extends Card {
  constructor(game) {
    super(game, "Titan's Revenge", "Morningtide", "MOR");
  }
}

module.exports = TitansRevenge;
