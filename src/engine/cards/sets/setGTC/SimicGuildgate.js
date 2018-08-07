"use strict";
const Constants = require ("../../../Constants");
const SimicGuildgateBase = require("../setCMA/SimicGuildgate");

class SimicGuildgate extends SimicGuildgateBase {
  constructor (game) {
    super(game, "Simic Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = SimicGuildgate;
