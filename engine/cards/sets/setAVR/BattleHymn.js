"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleHymn extends Card {
  constructor(game) {
    super(game, "Battle Hymn", "Avacyn Restored", "AVR");
  }
}

module.exports = BattleHymn;
