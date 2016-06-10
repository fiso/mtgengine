"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MausoleumTurnkey extends UnimplementedCard {
  constructor (game) {
    super(game, "Mausoleum Turnkey", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MausoleumTurnkey;
