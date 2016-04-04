"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildmageBase = require("../setGPT/OrzhovGuildmage");

class OrzhovGuildmage extends OrzhovGuildmageBase {
  constructor(game) {
    super(game, "Orzhov Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrzhovGuildmage;
