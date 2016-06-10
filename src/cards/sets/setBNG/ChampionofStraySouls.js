"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofStraySouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Stray Souls", "Born of the Gods", "BNG");
  }
}

module.exports = ChampionofStraySouls;
