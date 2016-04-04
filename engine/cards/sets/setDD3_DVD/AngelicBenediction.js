"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicBenediction extends Card {
  constructor(game) {
    super(game, "Angelic Benediction", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelicBenediction;
