"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenBattlePriest extends Card {
  constructor(game) {
    super(game, "Aven Battle Priest", "Magic Origins", "ORI");
  }
}

module.exports = AvenBattlePriest;
