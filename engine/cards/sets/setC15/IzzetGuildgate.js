"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetGuildgateBase = require("../setC13/IzzetGuildgate.js");

class IzzetGuildgate extends IzzetGuildgateBase {
  constructor(game) {
    super(game, "Izzet Guildgate", "Commander 2015", "C15");
  }
}

module.exports = IzzetGuildgate;
