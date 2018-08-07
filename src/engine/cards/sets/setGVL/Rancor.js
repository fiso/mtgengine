"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setA25/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Rancor;
