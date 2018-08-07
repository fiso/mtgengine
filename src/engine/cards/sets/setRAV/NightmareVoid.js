"use strict";
const Constants = require ("../../../Constants");
const NightmareVoidBase = require("../setDDJ/NightmareVoid");

class NightmareVoid extends NightmareVoidBase {
  constructor (game) {
    super(game, "Nightmare Void", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NightmareVoid;
