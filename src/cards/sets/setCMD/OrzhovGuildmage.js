"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildmageBase = require("../setCMA/OrzhovGuildmage");

class OrzhovGuildmage extends OrzhovGuildmageBase {
  constructor (game) {
    super(game, "Orzhov Guildmage", "Commander 2011", "CMD");
  }
}

module.exports = OrzhovGuildmage;
