"use strict";
const Constants = require ("../../../Constants");
const BorosGuildgateBase = require("../setCM2/BorosGuildgate");

class BorosGuildgate extends BorosGuildgateBase {
  constructor (game) {
    super(game, "Boros Guildgate", "Commander 2013", "C13");
  }
}

module.exports = BorosGuildgate;
