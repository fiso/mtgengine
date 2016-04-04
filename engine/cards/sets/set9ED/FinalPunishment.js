"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalPunishment extends UnimplementedCard {
  constructor(game) {
    super(game, "Final Punishment", "Ninth Edition", "9ED");
  }
}

module.exports = FinalPunishment;
