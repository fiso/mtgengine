"use strict";
const Constants = require ("../../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor(game) {
    super(game, "Havenwood Battleground", "Commander 2014", "C14");
  }
}

module.exports = HavenwoodBattleground;
