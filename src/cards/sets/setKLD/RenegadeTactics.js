"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Renegade Tactics", "Kaladesh", "KLD");
  }
}

module.exports = RenegadeTactics;
