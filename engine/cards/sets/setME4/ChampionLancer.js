"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionLancer extends Card {
  constructor(game) {
    super(game, "Champion Lancer", "Masters Edition IV", "ME4");
  }
}

module.exports = ChampionLancer;
