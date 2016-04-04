"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleBrawler extends Card {
  constructor(game) {
    super(game, "Battle Brawler", "Fate Reforged", "FRF");
  }
}

module.exports = BattleBrawler;
