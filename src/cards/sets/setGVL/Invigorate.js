"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setA25/Invigorate");

class Invigorate extends InvigorateBase {
  constructor (game) {
    super(game, "Invigorate", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Invigorate;
