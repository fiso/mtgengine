"use strict";
const Constants = require ("../../../Constants");
const KorozdaGuildmageBase = require("../setCMA/KorozdaGuildmage");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor (game) {
    super(game, "Korozda Guildmage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = KorozdaGuildmage;
