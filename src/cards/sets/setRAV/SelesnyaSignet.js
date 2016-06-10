"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setC13/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor (game) {
    super(game, "Selesnya Signet", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaSignet;
