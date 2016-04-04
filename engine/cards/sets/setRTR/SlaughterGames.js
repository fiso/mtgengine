"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterGames extends UnimplementedCard {
  constructor(game) {
    super(game, "Slaughter Games", "Return to Ravnica", "RTR");
  }
}

module.exports = SlaughterGames;
