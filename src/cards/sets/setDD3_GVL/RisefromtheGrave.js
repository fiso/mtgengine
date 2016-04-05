"use strict";
const Constants = require ("../../../Constants");
const RisefromtheGraveBase = require("../setC15/RisefromtheGrave");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor(game) {
    super(game, "Rise from the Grave", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = RisefromtheGrave;
