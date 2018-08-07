"use strict";
const Constants = require ("../../../Constants");
const KorozdaGuildmageBase = require("../setCMA/KorozdaGuildmage");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor (game) {
    super(game, "Korozda Guildmage", "Commander 2015", "C15");
  }
}

module.exports = KorozdaGuildmage;
