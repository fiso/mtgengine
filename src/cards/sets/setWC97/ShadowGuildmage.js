"use strict";
const Constants = require ("../../../Constants");
const ShadowGuildmageBase = require("../setTSB/ShadowGuildmage");

class ShadowGuildmage extends ShadowGuildmageBase {
  constructor (game) {
    super(game, "Shadow Guildmage", "World Championship Decks 1997", "WC97");
  }
}

module.exports = ShadowGuildmage;
