"use strict";
const Constants = require ("../../../Constants");
const DimirGuildgateBase = require("../setC18/DimirGuildgate");

class DimirGuildgate extends DimirGuildgateBase {
  constructor (game) {
    super(game, "Dimir Guildgate", "Gatecrash", "GTC");
  }
}

module.exports = DimirGuildgate;
