"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenBattlePriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Battle Priest", "Magic Origins", "ORI");
  }
}

module.exports = AvenBattlePriest;
