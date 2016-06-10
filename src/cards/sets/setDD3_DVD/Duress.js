"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor (game) {
    super(game, "Duress", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Duress;
