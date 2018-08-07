"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setCMA/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor (game) {
    super(game, "Selesnya Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaGuildmage;
