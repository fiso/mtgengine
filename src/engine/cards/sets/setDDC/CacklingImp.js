"use strict";
const Constants = require ("../../../Constants");
const CacklingImpBase = require("../setDVD/CacklingImp");

class CacklingImp extends CacklingImpBase {
  constructor (game) {
    super(game, "Cackling Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = CacklingImp;
