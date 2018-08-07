"use strict";
const Constants = require ("../../../Constants");
const AmbitionsCostBase = require("../setMTGA/AmbitionsCost");

class AmbitionsCost extends AmbitionsCostBase {
  constructor (game) {
    super(game, "Ambition's Cost", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = AmbitionsCost;
