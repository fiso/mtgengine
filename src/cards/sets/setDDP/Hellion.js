"use strict";
const Constants = require ("../../../Constants");
const HellionBase = require("../setTPCA/Hellion");

class Hellion extends HellionBase {
  constructor (game) {
    super(game, "Hellion", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Hellion;
