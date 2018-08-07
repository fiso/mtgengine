"use strict";
const Constants = require ("../../../Constants");
const KorozdaGuildmageBase = require("../setCMA/KorozdaGuildmage");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor (game) {
    super(game, "Korozda Guildmage", "Commander 2016", "C16");
  }
}

module.exports = KorozdaGuildmage;
