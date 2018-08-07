"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TandemTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Tandem Tactics", "Battlebond", "BBD");
  }
}

module.exports = TandemTactics;
