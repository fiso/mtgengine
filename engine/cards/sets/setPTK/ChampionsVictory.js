"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionsVictory extends Card {
  constructor(game) {
    super(game, "Champion's Victory", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ChampionsVictory;
