"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingMawcor extends UnimplementedCard {
  constructor(game) {
    super(game, "Fledgling Mawcor", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FledglingMawcor;
