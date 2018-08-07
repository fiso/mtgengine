"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setCMA/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor (game) {
    super(game, "Selesnya Guildmage", "Archenemy", "ARC");
  }
}

module.exports = SelesnyaGuildmage;
