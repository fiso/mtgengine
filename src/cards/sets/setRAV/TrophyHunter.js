"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrophyHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Trophy Hunter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TrophyHunter;
