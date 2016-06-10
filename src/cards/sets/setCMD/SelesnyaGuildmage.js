"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setARC/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor (game) {
    super(game, "Selesnya Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SelesnyaGuildmage;
