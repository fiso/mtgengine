"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RisefromtheGraveBase = require("../setC15/RisefromtheGrave.js");

class RisefromtheGrave extends RisefromtheGraveBase {
  constructor(game) {
    super(game, "Rise from the Grave", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = RisefromtheGrave;
