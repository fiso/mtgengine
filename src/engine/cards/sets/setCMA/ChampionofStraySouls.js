"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofStraySouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Stray Souls", "Commander Anthology", "CMA");
  }
}

module.exports = ChampionofStraySouls;
