"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FledglingMawcor extends Card {
  constructor(game) {
    super(game, "Fledgling Mawcor", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FledglingMawcor;
