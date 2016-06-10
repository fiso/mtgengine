"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AchHansRun extends UnimplementedCard {
  constructor (game) {
    super(game, "\"Ach! Hans, Run!\"", "Unhinged", "UNH");
  }
}

module.exports = AchHansRun;
