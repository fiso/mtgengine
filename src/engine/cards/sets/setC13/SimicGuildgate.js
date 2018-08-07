"use strict";
const Constants = require ("../../../Constants");
const SimicGuildgateBase = require("../setCMA/SimicGuildgate");

class SimicGuildgate extends SimicGuildgateBase {
  constructor (game) {
    super(game, "Simic Guildgate", "Commander 2013", "C13");
  }
}

module.exports = SimicGuildgate;
