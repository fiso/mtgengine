"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlegroundGeist extends Card {
  constructor(game) {
    super(game, "Battleground Geist", "Innistrad", "ISD");
  }
}

module.exports = BattlegroundGeist;
