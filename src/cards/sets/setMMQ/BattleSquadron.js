"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleSquadron extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Squadron", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleSquadron;
