"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadingAlgae extends UnimplementedCard {
  constructor (game) {
    super(game, "Spreading Algae", "Eighth Edition", "8ED");
  }
}

module.exports = SpreadingAlgae;
