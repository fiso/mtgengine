"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleRampart extends Card {
  constructor(game) {
    super(game, "Battle Rampart", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleRampart;
