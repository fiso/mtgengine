"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlegroundGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Battleground Geist", "Innistrad", "ISD");
  }
}

module.exports = BattlegroundGeist;
