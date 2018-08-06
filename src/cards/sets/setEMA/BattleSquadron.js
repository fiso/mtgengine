"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleSquadron extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Squadron", "Eternal Masters", "EMA");
  }
}

module.exports = BattleSquadron;
