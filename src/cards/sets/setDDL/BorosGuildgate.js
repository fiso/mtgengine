"use strict";
const Constants = require ("../../../Constants");
const BorosGuildgateBase = require("../setC13/BorosGuildgate");

class BorosGuildgate extends BorosGuildgateBase {
  constructor (game) {
    super(game, "Boros Guildgate", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BorosGuildgate;
