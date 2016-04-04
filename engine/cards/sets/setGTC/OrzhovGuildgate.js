"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrzhovGuildgateBase = require("../setC13/OrzhovGuildgate.js");

class OrzhovGuildgate extends OrzhovGuildgateBase {
  constructor(game) {
    super(game, "Orzhov Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = OrzhovGuildgate;
