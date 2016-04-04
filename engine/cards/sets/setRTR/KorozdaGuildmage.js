"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorozdaGuildmageBase = require("../setC15/KorozdaGuildmage.js");

class KorozdaGuildmage extends KorozdaGuildmageBase {
  constructor(game) {
    super(game, "Korozda Guildmage", "Return to Ravnica", "RTR");
  }
}

module.exports = KorozdaGuildmage;
