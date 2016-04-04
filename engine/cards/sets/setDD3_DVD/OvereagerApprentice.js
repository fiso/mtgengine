"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OvereagerApprentice extends Card {
  constructor(game) {
    super(game, "Overeager Apprentice", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = OvereagerApprentice;
