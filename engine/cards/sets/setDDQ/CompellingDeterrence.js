"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CompellingDeterrence extends Card {
  constructor(game) {
    super(game, "Compelling Deterrence", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CompellingDeterrence;
