"use strict";
const Constants = require ("../../../Constants");
const BattleofWitsBase = require("../setM13/BattleofWits");

class BattleofWits extends BattleofWitsBase {
  constructor (game) {
    super(game, "Battle of Wits", "Ninth Edition", "9ED");
  }
}

module.exports = BattleofWits;
