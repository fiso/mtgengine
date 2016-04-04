"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurBattlemaster extends Card {
  constructor(game) {
    super(game, "Centaur Battlemaster", "Theros", "THS");
  }
}

module.exports = CentaurBattlemaster;
