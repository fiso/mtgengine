"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildgateBase = require("../setC18/OrzhovGuildgate");

class OrzhovGuildgate extends OrzhovGuildgateBase {
  constructor (game) {
    super(game, "Orzhov Guildgate", "Commander 2013", "C13");
  }
}

module.exports = OrzhovGuildgate;
