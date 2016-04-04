"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattlegateMimicBase = require("../setEVE/BattlegateMimic.js");

class BattlegateMimic extends BattlegateMimicBase {
  constructor(game) {
    super(game, "Battlegate Mimic", "Planechase", "HOP");
  }
}

module.exports = BattlegateMimic;
