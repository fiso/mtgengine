"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HavenwoodBattlegroundBase = require("../setBTD/HavenwoodBattleground.js");

class HavenwoodBattleground extends HavenwoodBattlegroundBase {
  constructor(game) {
    super(game, "Havenwood Battleground", "Commander 2014", "C14");
  }
}

module.exports = HavenwoodBattleground;
