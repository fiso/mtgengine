"use strict";
const Constants = require ("../../../Constants");
const RisefromtheGraveBase = require("../setMTGA/RisefromtheGrave");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor (game) {
    super(game, "Rise from the Grave", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = RisefromtheGrave;
