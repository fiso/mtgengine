"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BattleSliver;
