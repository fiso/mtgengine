"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoanoftheUnhallowed extends UnimplementedCard {
  constructor(game) {
    super(game, "Moan of the Unhallowed", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MoanoftheUnhallowed;
