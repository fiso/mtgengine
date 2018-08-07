"use strict";
const Constants = require ("../../../Constants");
const BorosGuildgateBase = require("../setCM2/BorosGuildgate");

class BorosGuildgate extends BorosGuildgateBase {
  constructor (game) {
    super(game, "Boros Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = BorosGuildgate;
