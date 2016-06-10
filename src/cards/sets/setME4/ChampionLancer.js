"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion Lancer", "Masters Edition IV", "ME4");
  }
}

module.exports = ChampionLancer;
