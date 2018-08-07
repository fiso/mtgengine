"use strict";
const Constants = require ("../../../Constants");
const AzoriusGuildmageBase = require("../setCMD/AzoriusGuildmage");

class AzoriusGuildmage extends AzoriusGuildmageBase {
  constructor (game) {
    super(game, "Azorius Guildmage", "Dissension", "DIS");
  }
}

module.exports = AzoriusGuildmage;
