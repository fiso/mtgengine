"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setJVC/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Incinerate;
