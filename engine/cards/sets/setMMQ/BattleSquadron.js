"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleSquadron extends Card {
  constructor(game) {
    super(game, "Battle Squadron", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleSquadron;
