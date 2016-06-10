"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleHymn extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Hymn", "Avacyn Restored", "AVR");
  }
}

module.exports = BattleHymn;
