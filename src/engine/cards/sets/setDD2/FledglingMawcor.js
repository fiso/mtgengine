"use strict";
const Constants = require ("../../../Constants");
const FledglingMawcorBase = require("../setJVC/FledglingMawcor");

class FledglingMawcor extends FledglingMawcorBase {
  constructor (game) {
    super(game, "Fledgling Mawcor", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FledglingMawcor;
