"use strict";
const Constants = require ("../../../Constants");
const AzoriusGuildmageBase = require("../setCMD/AzoriusGuildmage");

class AzoriusGuildmage extends AzoriusGuildmageBase {
  constructor (game) {
    super(game, "Azorius Guildmage", "Magic Online Promos", "PRM");
  }
}

module.exports = AzoriusGuildmage;
