"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Emcee extends UnimplementedCard {
  constructor(game) {
    super(game, "Emcee", "Unhinged", "UNH");
  }
}

module.exports = Emcee;
