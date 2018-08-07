"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingMawcor extends UnimplementedCard {
  constructor (game) {
    super(game, "Fledgling Mawcor", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = FledglingMawcor;
