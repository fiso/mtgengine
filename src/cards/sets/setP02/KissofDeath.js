"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KissofDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiss of Death", "Portal Second Age", "P02");
  }
}

module.exports = KissofDeath;
