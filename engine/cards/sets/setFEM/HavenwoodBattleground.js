"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground.js");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor(game) {
    super(game, "Havenwood Battleground", "Fallen Empires", "FEM");
  }
}

module.exports = HavenwoodBattleground;
