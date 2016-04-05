"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Duress;
