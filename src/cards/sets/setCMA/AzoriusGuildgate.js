"use strict";
const Constants = require ("../../../Constants");
const AzoriusGuildgateBase = require("../setC18/AzoriusGuildgate");

class AzoriusGuildgate extends AzoriusGuildgateBase {
  constructor (game) {
    super(game, "Azorius Guildgate", "Commander Anthology", "CMA");
  }
}

module.exports = AzoriusGuildgate;
