"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattleofWitsBase = require("../setM13/BattleofWits.js");

class BattleofWits extends BattleofWitsBase {
  constructor(game) {
    super(game, "Battle of Wits", "Ninth Edition", "9ED");
  }
}

module.exports = BattleofWits;
