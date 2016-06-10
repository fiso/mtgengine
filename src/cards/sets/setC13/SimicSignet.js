"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Signet", "Commander 2013 Edition", "C13");
  }
}

module.exports = SimicSignet;
