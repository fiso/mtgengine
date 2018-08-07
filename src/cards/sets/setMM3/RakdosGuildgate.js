"use strict";
const Constants = require ("../../../Constants");
const RakdosGuildgateBase = require("../setC17/RakdosGuildgate");

class RakdosGuildgate extends RakdosGuildgateBase {
  constructor (game) {
    super(game, "Rakdos Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = RakdosGuildgate;
