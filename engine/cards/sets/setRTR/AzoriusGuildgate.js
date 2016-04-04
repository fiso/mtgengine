"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusGuildgateBase = require("../setC13/AzoriusGuildgate.js");

class AzoriusGuildgate extends AzoriusGuildgateBase {
  constructor(game) {
    super(game, "Azorius Guildgate", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusGuildgate;
