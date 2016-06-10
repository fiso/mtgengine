"use strict";
const Constants = require ("../../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor (game) {
    super(game, "Havenwood Battleground", "Masters Edition II", "ME2");
  }
}

module.exports = HavenwoodBattleground;
