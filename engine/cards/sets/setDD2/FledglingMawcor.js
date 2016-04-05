"use strict";
const Constants = require ("../../../Constants");
const FledglingMawcorBase = require("../setDD3_JVC/FledglingMawcor");

class FledglingMawcor extends FledglingMawcorBase {
  constructor(game) {
    super(game, "Fledgling Mawcor", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FledglingMawcor;
