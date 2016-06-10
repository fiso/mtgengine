"use strict";
const Constants = require ("../../../Constants");
const JacetheLivingGuildpactBase = require("../setM15/JacetheLivingGuildpact");

class JacetheLivingGuildpact extends JacetheLivingGuildpactBase {
  constructor (game) {
    super(game, "Jace, the Living Guildpact", "Media Inserts", "pMEI");
  }
}

module.exports = JacetheLivingGuildpact;
