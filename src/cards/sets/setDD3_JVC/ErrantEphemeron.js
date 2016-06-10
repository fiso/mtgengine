"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErrantEphemeron extends UnimplementedCard {
  constructor (game) {
    super(game, "Errant Ephemeron", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ErrantEphemeron;
