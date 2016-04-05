"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleHurda extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Hurda", "Worldwake", "WWK");
  }
}

module.exports = BattleHurda;
