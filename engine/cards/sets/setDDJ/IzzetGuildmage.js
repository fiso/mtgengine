"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetGuildmage extends Card {
  constructor(game) {
    super(game, "Izzet Guildmage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetGuildmage;
