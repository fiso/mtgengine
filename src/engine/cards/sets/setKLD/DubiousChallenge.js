"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DubiousChallenge extends UnimplementedCard {
  constructor (game) {
    super(game, "Dubious Challenge", "Kaladesh", "KLD");
  }
}

module.exports = DubiousChallenge;
