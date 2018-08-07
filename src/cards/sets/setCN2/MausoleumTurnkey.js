"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MausoleumTurnkey extends UnimplementedCard {
  constructor (game) {
    super(game, "Mausoleum Turnkey", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = MausoleumTurnkey;
