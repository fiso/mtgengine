"use strict";
const Constants = require ("../../../Constants");
const IzzetGuildgateBase = require("../setC18/IzzetGuildgate");

class IzzetGuildgate extends IzzetGuildgateBase {
  constructor (game) {
    super(game, "Izzet Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = IzzetGuildgate;
