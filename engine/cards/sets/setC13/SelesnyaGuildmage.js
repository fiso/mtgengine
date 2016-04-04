"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildmageBase = require("../setARC/SelesnyaGuildmage");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor(game) {
    super(game, "Selesnya Guildmage", "Commander 2013 Edition", "C13");
  }
}

module.exports = SelesnyaGuildmage;
