"use strict";
const Constants = require ("../../../Constants");
const InvigorateBase = require("../setA25/Invigorate");

class Invigorate extends InvigorateBase {
  constructor (game) {
    super(game, "Invigorate", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Invigorate;
