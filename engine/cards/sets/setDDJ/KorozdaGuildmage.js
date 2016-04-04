"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorozdaGuildmageBase = require("../setC15/KorozdaGuildmage.js");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor(game) {
    super(game, "Korozda Guildmage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = KorozdaGuildmage;
