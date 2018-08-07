"use strict";
const Constants = require ("../../../Constants");
const HavenwoodBattlegroundBase = require("../setCMA/HavenwoodBattleground");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor (game) {
    super(game, "Havenwood Battleground", "Fallen Empires", "FEM");
  }
}

module.exports = HavenwoodBattleground;
