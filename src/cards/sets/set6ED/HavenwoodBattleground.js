"use strict";
const Constants = require ("../../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor (game) {
    super(game, "Havenwood Battleground", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HavenwoodBattleground;
