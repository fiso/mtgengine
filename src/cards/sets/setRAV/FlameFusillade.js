"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameFusillade extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Fusillade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlameFusillade;
