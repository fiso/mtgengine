"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setARC/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor(game) {
    super(game, "Selesnya Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaGuildmage;
