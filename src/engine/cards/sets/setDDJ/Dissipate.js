"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setM15/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Dissipate;
