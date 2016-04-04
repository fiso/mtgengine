"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoanoftheUnhallowed extends Card {
  constructor(game) {
    super(game, "Moan of the Unhallowed", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MoanoftheUnhallowed;
