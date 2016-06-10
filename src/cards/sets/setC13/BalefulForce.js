"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Force", "Commander 2013 Edition", "C13");
  }
}

module.exports = BalefulForce;
