"use strict";
const Constants = require ("../../../Constants");
const IzzetGuildmageBase = require("../setDDJ/IzzetGuildmage");

class IzzetGuildmage extends IzzetGuildmageBase {
  constructor (game) {
    super(game, "Izzet Guildmage", "Guildpact", "GPT");
  }
}

module.exports = IzzetGuildmage;
