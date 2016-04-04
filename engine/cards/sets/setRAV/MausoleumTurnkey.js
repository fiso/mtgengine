"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MausoleumTurnkey extends Card {
  constructor(game) {
    super(game, "Mausoleum Turnkey", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MausoleumTurnkey;
