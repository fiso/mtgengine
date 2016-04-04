"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleSliver extends Card {
  constructor(game) {
    super(game, "Battle Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BattleSliver;
