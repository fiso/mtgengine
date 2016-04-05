"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidewaterMinion extends UnimplementedCard {
  constructor(game) {
    super(game, "Tidewater Minion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TidewaterMinion;
