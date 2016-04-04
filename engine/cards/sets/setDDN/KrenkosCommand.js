"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrenkosCommand extends Card {
  constructor(game) {
    super(game, "Krenko's Command", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkosCommand;
