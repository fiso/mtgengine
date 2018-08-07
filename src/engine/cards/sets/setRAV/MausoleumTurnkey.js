"use strict";
const Constants = require ("../../../Constants");
const MausoleumTurnkeyBase = require("../setCN2/MausoleumTurnkey");

class MausoleumTurnkey extends MausoleumTurnkeyBase {
  constructor (game) {
    super(game, "Mausoleum Turnkey", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MausoleumTurnkey;
