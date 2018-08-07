"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApprenticeSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Apprentice Sorcerer", "Portal Second Age", "P02");
  }
}

module.exports = ApprenticeSorcerer;
