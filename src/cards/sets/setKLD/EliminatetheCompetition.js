"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliminatetheCompetition extends UnimplementedCard {
  constructor (game) {
    super(game, "Eliminate the Competition", "Kaladesh", "KLD");
  }
}

module.exports = EliminatetheCompetition;
