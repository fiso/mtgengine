"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Rage", "Stronghold", "STH");
  }
}

module.exports = PrimalRage;
