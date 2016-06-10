"use strict";
const Constants = require ("../../../Constants");
const AzoriusGuildmageBase = require("../setDIS/AzoriusGuildmage");

class AzoriusGuildmage extends AzoriusGuildmageBase {
  constructor (game) {
    super(game, "Azorius Guildmage", "Release Events", "pREL");
  }
}

module.exports = AzoriusGuildmage;
