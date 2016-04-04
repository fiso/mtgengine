"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimicGuildgateBase = require("../setC13/SimicGuildgate.js");

class SimicGuildgate extends SimicGuildgateBase {
  constructor(game) {
    super(game, "Simic Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = SimicGuildgate;
