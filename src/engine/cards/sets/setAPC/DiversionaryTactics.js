"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiversionaryTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Diversionary Tactics", "Apocalypse", "APC");
  }
}

module.exports = DiversionaryTactics;
