"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetGuildmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Guildmage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetGuildmage;
