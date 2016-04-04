"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerraAdvocate extends Card {
  constructor(game) {
    super(game, "Serra Advocate", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerraAdvocate;
