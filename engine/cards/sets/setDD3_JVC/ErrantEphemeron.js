"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErrantEphemeron extends Card {
  constructor(game) {
    super(game, "Errant Ephemeron", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ErrantEphemeron;
