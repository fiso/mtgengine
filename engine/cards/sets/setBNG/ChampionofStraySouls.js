"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionofStraySouls extends Card {
  constructor(game) {
    super(game, "Champion of Stray Souls", "Born of the Gods", "BNG");
  }
}

module.exports = ChampionofStraySouls;
