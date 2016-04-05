"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleofWits extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle of Wits", "Magic 2013", "M13");
  }
}

module.exports = BattleofWits;
