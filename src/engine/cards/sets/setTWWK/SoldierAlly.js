"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldierAlly extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldier Ally", "Worldwake Tokens", "TWWK");
  }
}

module.exports = SoldierAlly;
