"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicProtector extends Card {
  constructor(game) {
    super(game, "Angelic Protector", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelicProtector;
