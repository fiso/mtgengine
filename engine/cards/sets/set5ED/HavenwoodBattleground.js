"use strict";
const Constants = require ("../../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor(game) {
    super(game, "Havenwood Battleground", "Fifth Edition", "5ED");
  }
}

module.exports = HavenwoodBattleground;
