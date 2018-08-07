"use strict";
const Constants = require ("../../../Constants");
const SimicGuildgateBase = require("../setCMA/SimicGuildgate");

class SimicGuildgate extends SimicGuildgateBase {
  constructor (game) {
    super(game, "Simic Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = SimicGuildgate;
