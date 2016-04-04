"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrzhovGuildmage extends Card {
  constructor(game) {
    super(game, "Orzhov Guildmage", "Guildpact", "GPT");
  }
}

module.exports = OrzhovGuildmage;
