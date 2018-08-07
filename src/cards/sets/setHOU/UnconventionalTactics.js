"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnconventionalTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Unconventional Tactics", "Hour of Devastation", "HOU");
  }
}

module.exports = UnconventionalTactics;
