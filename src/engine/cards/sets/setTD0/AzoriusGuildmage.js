"use strict";
const Constants = require ("../../../Constants");
const AzoriusGuildmageBase = require("../setCMD/AzoriusGuildmage");

class AzoriusGuildmage extends AzoriusGuildmageBase {
  constructor (game) {
    super(game, "Azorius Guildmage", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = AzoriusGuildmage;
