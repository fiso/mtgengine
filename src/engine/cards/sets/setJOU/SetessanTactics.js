"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SetessanTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Setessan Tactics", "Journey into Nyx", "JOU");
  }
}

module.exports = SetessanTactics;
