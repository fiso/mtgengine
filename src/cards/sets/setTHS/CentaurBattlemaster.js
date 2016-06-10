"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurBattlemaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Battlemaster", "Theros", "THS");
  }
}

module.exports = CentaurBattlemaster;
