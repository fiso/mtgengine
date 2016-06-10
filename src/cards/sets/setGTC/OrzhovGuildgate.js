"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildgateBase = require("../setC13/OrzhovGuildgate");

class OrzhovGuildgate extends OrzhovGuildgateBase {
  constructor (game) {
    super(game, "Orzhov Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = OrzhovGuildgate;
