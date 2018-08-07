"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimePunishment extends UnimplementedCard {
  constructor (game) {
    super(game, "Crime // Punishment", "Dissension", "DIS");
  }
}

module.exports = CrimePunishment;
