"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setCMA/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor (game) {
    super(game, "Selesnya Guildmage", "Modern Masters 2015", "MM2");
  }
}

module.exports = SelesnyaGuildmage;
