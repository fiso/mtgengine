"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildgateBase = require("../setC18/OrzhovGuildgate");

class OrzhovGuildgate extends OrzhovGuildgateBase {
  constructor (game) {
    super(game, "Orzhov Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = OrzhovGuildgate;
