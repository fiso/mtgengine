"use strict";
const Constants = require ("../../../Constants");
const DimirGuildgateBase = require("../setC18/DimirGuildgate");

class DimirGuildgate extends DimirGuildgateBase {
  constructor (game) {
    super(game, "Dimir Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = DimirGuildgate;
