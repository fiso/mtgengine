"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosGuildgateBase = require("../setC13/RakdosGuildgate.js");

class RakdosGuildgate extends RakdosGuildgateBase {
  constructor(game) {
    super(game, "Rakdos Guildgate", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosGuildgate;
