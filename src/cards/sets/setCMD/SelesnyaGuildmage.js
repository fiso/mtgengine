"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setCMA/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor (game) {
    super(game, "Selesnya Guildmage", "Commander 2011", "CMD");
  }
}

module.exports = SelesnyaGuildmage;
