"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setpARL/ManoWar");

class ManoWar extends ManoWarBase {
  constructor (game) {
    super(game, "Man-o'-War", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ManoWar;
