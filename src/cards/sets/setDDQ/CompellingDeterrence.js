"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompellingDeterrence extends UnimplementedCard {
  constructor (game) {
    super(game, "Compelling Deterrence", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CompellingDeterrence;
