"use strict";
const Constants = require ("../../../Constants");
const ShadowGuildmageBase = require("../setTSB/ShadowGuildmage");

class ShadowGuildmage extends ShadowGuildmageBase {
  constructor (game) {
    super(game, "Shadow Guildmage", "Mirage", "MIR");
  }
}

module.exports = ShadowGuildmage;
