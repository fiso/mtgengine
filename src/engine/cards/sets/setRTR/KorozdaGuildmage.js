"use strict";
const Constants = require ("../../../Constants");
const KorozdaGuildmageBase = require("../setCMA/KorozdaGuildmage");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor (game) {
    super(game, "Korozda Guildmage", "Return to Ravnica", "RTR");
  }
}

module.exports = KorozdaGuildmage;
