"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleofWits extends Card {
  constructor(game) {
    super(game, "Battle of Wits", "Magic 2013", "M13");
  }
}

module.exports = BattleofWits;
