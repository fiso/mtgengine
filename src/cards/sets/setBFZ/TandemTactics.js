"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TandemTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Tandem Tactics", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TandemTactics;
