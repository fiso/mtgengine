"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildmageBase = require("../setCMA/OrzhovGuildmage");

class OrzhovGuildmage extends OrzhovGuildmageBase {
  constructor (game) {
    super(game, "Orzhov Guildmage", "Guildpact", "GPT");
  }
}

module.exports = OrzhovGuildmage;
