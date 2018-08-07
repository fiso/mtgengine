"use strict";
const Constants = require ("../../../Constants");
const GruulGuildgateBase = require("../setMM3/GruulGuildgate");

class GruulGuildgate extends GruulGuildgateBase {
  constructor (game) {
    super(game, "Gruul Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = GruulGuildgate;
